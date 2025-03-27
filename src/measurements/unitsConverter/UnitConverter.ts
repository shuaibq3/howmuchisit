import MeasurementType from '../config/types'
import { Measurement } from '../units/units'
import ConversionFactor from './conversions/conversionFactor'

export default interface UnitConverter<T extends MeasurementType> {
  getMeasurementType(): T
  getConversionFactor(): ConversionFactor<T>['conversionFactors']
  getUnitConvertedValue(conversionMeasurement: Measurement<T>, convertUnit: Measurement<T>['unit']): Measurement<T>
}