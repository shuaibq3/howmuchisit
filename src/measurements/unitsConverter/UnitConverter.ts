import MeasurementType from '../config/types'
import { Measurement } from '../units/units'

export default interface UnitConverter<T extends MeasurementType> {
  getUnitType(): T
  getUnitConvertedValue(conversionMeasurement: Measurement<T>, convertUnit: Measurement<T>['unit']): Measurement<T>
}