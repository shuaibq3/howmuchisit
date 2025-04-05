import MeasurementSubject from '../measurements/subjects/measurementSubject'
import { MeasurementStandard, MeasurementType } from '../measurements/types'
import { Measurement } from '../measurements/types'
export default interface MeasurementUseCase<T extends MeasurementType[]> {
  readonly measurementContext: MeasurementSubject<T>

  getMeasurementMatrix(
    useCaseWiseMeasurement: Record<T[number], Measurement<T[number]>>, supportedUnitStandard?: MeasurementStandard
  ): Record<T[number], Measurement<T[number]>[]>
  getMeasurementMatrixString(useCaseWiseBrokenDownMeasurements: Record<T[number], Measurement<T[number]>[]>): Record<T[number], string>
}