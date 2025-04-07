import { MeasurementStandard, MeasurementType } from '../measurements/types'
import { Measurement } from '../measurements/types'
import { NumericValue } from '../utils/numberUtils'

export default interface SubjectMeasurementBreakdown<T extends MeasurementType[]> {
  getUseCaseWiseMeasurementBreakdown(
    inputValue: NumericValue, useCaseWiseMeasurements: Record<T[number], Measurement<T[number]>[]>, supportedUnitStandard?: MeasurementStandard
  ): Record<T[number], Measurement<T[number]>[]>
  getUseCaseWiseBreakdownAsString(useCaseWiseBrokenDownMeasurements: Record<T[number], Measurement<T[number]>[]>): Record<T[number], string>
}