import { MeasurementType, Measurement } from '../types'
import UnitConverter from '../unitsConverter/UnitConverter'

export default interface BreakdownUnits<T extends MeasurementType> {
  getUnitsBreakdown(measurement: Measurement<T>, unitConverter: UnitConverter<T>): Measurement<T>[]
}