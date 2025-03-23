import MeasurementType from '../config/types'
import { Measurement } from '../units/units'
import UnitConverter from '../unitsConverter/UnitConverter'

export default interface BreakdownInUnits<T extends MeasurementType> {
  getUnitsBreakdown(measurementType: Measurement<T>, unitConverter: UnitConverter<T>): Measurement<T>[]
}