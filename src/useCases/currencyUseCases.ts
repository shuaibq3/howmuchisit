import Currency from '../measurements/subjects/currency/currency'
import { Measurement, MeasurementStandard, MeasurementType } from '../measurements/types'
import SupportedUseCaseWiseBreakdown from './SupportedUseCaseWiseBreakdown'
import { NumericValue } from '../utils/numberUtils'
import { divide } from '../utils/numericalOperations'
import Unit from '../measurements/units/units'

type CurrencyUseCases = Currency['supportedUseCases']

function getMeasurementMultiplicationFactorForType(measurementContext: Currency, measurementType: CurrencyUseCases[number]): Measurement<CurrencyUseCases[number]>[] {
  if (measurementType === MeasurementType.time) {
    // counting 10 digits per second
    return [{ value: 0.1, unit: Unit.second }]
  }

  if (measurementType === MeasurementType.weight) {
    return [{ value: divide(measurementContext.weight.value, measurementContext.value), unit: measurementContext.weight.unit }]
  }

  if (measurementType === MeasurementType.length || measurementType === MeasurementType.area || measurementType === MeasurementType.volume) {
    const measurements = [{ value: divide(measurementContext.length.value, measurementContext.value), unit: measurementContext.length.unit }]
    if (measurementType !== MeasurementType.length) {
      measurements.push(measurementContext.width)
    }
    if (measurementType === MeasurementType.volume) {
      measurements.push(measurementContext.thickness)
    }
    return measurements
  }
  return []
}

export default function currencyUseCases(inputValue: NumericValue, currencyContext: Currency, unitStandard?: MeasurementStandard) {
  const useCaseMeasurements = currencyContext.supportedUseCases.reduce((acc, measurementType) => ({
    ...acc, 
    [measurementType]: getMeasurementMultiplicationFactorForType(currencyContext, measurementType)
  }), {} as Record<CurrencyUseCases[number], Measurement<CurrencyUseCases[number]>[]>)

  const universalMeasurementUseCases = new SupportedUseCaseWiseBreakdown<CurrencyUseCases>()
  const measurementMatrix = universalMeasurementUseCases.getUseCaseWiseMeasurementBreakdown(inputValue, useCaseMeasurements, unitStandard)
  return { measurementMatrix, measurementMatrixString: universalMeasurementUseCases.getUseCaseWiseBreakdownAsString(measurementMatrix) }
}