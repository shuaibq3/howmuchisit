import { MeasurementStandard, MeasurementType } from '../measurements/types'
import { Measurement } from '../measurements/types'
import BreakdownToAppropriateUnits from '../measurements/unitsBreakdown/BreakdownToAppropriateUnits'
import UniversalUnitConverter from '../measurements/unitsConverter/UniversalUnitConverter'
import MeasurementUseCase from './MeasurementUseCase'
import MeasurementSubject from '../measurements/subjects/measurementSubject'
import getConversionFactor from '../measurements/unitsConverter/conversions/getConversionFactor'
import { isGreaterThan } from '../utils/numericalOperations'
import { convertToPlural } from '../measurements/units/unitUtils'

export default class UniversalMeasurementUseCase<T extends MeasurementType[]> implements MeasurementUseCase<T> {
  constructor(
    readonly measurementContext: MeasurementSubject<T>
  ) {}

  // useCaseWiseMeasurement contains all the measurementTypes defined in measurementContext.supportedUseCases. enforced through ts compiler
  getMeasurementMatrix(useCaseWiseMeasurement: Record<T[number], Measurement<T[number]>>, supportedUnitStandard?: MeasurementStandard): Record<T[number], Measurement<T[number]>[]> {
    return this.measurementContext.supportedUseCases.reduce((useCaseWiseMeasurementBreakdown, measurementType) => {
      const unitsBreakdown = new BreakdownToAppropriateUnits(measurementType, supportedUnitStandard)
      const unitConverter = new UniversalUnitConverter(getConversionFactor(measurementType))
      const measurement = useCaseWiseMeasurement[measurementType as keyof typeof useCaseWiseMeasurement]
      return { 
        ...useCaseWiseMeasurementBreakdown, 
        [measurementType]: unitsBreakdown.getUnitsBreakdown(measurement, unitConverter)
      }
    }, {} as Record<T[number], Measurement<T[number]>[]>)
  }

  getMeasurementMatrixString(useCaseWiseBrokenDownMeasurements: Record<T[number], Measurement<T[number]>[]>): Record<T[number], string> {
    return Object.keys(useCaseWiseBrokenDownMeasurements).reduce((acc, measurementType) => {
      const measurement = useCaseWiseBrokenDownMeasurements[measurementType as keyof typeof useCaseWiseBrokenDownMeasurements]
      return { 
        ...acc, 
        [measurementType]: measurement .map(
          breakdown => `${breakdown.value} ${isGreaterThan(breakdown.value, 1) ? convertToPlural(breakdown.unit) : breakdown.unit}`
        ).join(', ') }
    }, {} as Record<T[number], string>)
  }
}