import Currency from '../measurements/subjects/currency/currency'
import { Measurement, MeasurementStandard, MeasurementType } from '../measurements/types'
import SupportedUseCaseWiseBreakdown from './SupportedUseCaseWiseBreakdown'
import { NumericValue } from '../utils/numberUtils'
import { divide } from '../utils/numericalOperations'
import Unit from '../measurements/units/units'

function getMeasurementMultiplicationFactorForType(measurementContext: Currency, measurementType: MeasurementType): Measurement<MeasurementType>[] {
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

export default function currencyUseCases(inputValue: NumericValue, measurementContext: Currency, unitStandard?: MeasurementStandard) {
  const universalMeasurementUseCases = new SupportedUseCaseWiseBreakdown(measurementContext)
  const useCaseMeasurements = measurementContext.supportedUseCases.reduce((acc, measurementType) => ({
    ...acc, 
    [measurementType]: getMeasurementMultiplicationFactorForType(measurementContext, measurementType)
  }), {} as Record<Currency['supportedUseCases'][number], Measurement<MeasurementType>[]>)

  const measurementMatrix = universalMeasurementUseCases.getUseCaseWiseMeasurementBreakdown(inputValue, useCaseMeasurements, unitStandard)
  return { measurementMatrix, measurementMatrixString: universalMeasurementUseCases.getUseCaseWiseBreakdownAsString(measurementMatrix) }
}