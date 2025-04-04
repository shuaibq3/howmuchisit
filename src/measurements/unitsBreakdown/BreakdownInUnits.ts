import { MeasurementType, Measurement } from '../types'
import UnitConverter from '../unitsConverter/UnitConverter'

export default interface BreakdownInUnits<T extends MeasurementType> {
  getUnitsBreakdown(measurement: Measurement<T>, unitConverter: UnitConverter<T>): Measurement<T>[]
  getMeasurementString(measurementUnitBreakdown: Measurement<T>[]): string
}