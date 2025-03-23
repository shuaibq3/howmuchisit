import { NumericValue } from '../../utils/numberUtils'
import { divide, multiply } from '../../utils/numericalOperations'
import MeasurementType from '../config/types'
import Unit, { Measurement, LengthUnits } from '../units/units'
import UnitConverter from './UnitConverter'

/*
 * This class handles length unit conversions.
 * It uses standard conversion factors for simplicity.
 */
export default class LengthUnitConverter implements UnitConverter<MeasurementType.length> {
  getUnitType(): MeasurementType.length {
    return MeasurementType.length
  }

  private convertToMillimeters(lengthMeasurement: Measurement<MeasurementType.length>): NumericValue {
    switch (lengthMeasurement.unit) {
      case Unit.millimeter:
        return lengthMeasurement.value
      case Unit.centimeter:
        return multiply(lengthMeasurement.value, 10)
      case Unit.meter:
        return multiply(lengthMeasurement.value, 1000)
      case Unit.kilometer:
        return multiply(lengthMeasurement.value, 1000000)
      case Unit.lightyear:
        return multiply(lengthMeasurement.value, 9.461e+18) // 1 light year = 9.461e+18 mm
      case Unit.inch:
        return multiply(lengthMeasurement.value, 25.4)  // 1 inch = 25.4 mm
      case Unit.foot:
        return multiply(lengthMeasurement.value, 304.8) // 1 foot = 304.8 mm
      case Unit.yard:
        return multiply(lengthMeasurement.value, 914.4)  // 1 yard = 914.4 mm
      case Unit.mile:
        return multiply(lengthMeasurement.value, 1609344) // 1 mile = 1609344 mm
    }
  }

  private convertToCentimeters(lengthMeasurement: Measurement<MeasurementType.length>): NumericValue {
    return divide(this.convertToMillimeters(lengthMeasurement), 10)
  }

  private convertToMeters(lengthMeasurement: Measurement<MeasurementType.length>): NumericValue {
    return divide(this.convertToMillimeters(lengthMeasurement), 1000)
  }

  private convertToKilometers(lengthMeasurement: Measurement<MeasurementType.length>): NumericValue {
    return divide(this.convertToMeters(lengthMeasurement), 1000)
  }

  private convertToLightYear(lengthMeasurement: Measurement<MeasurementType.length>): NumericValue {
    return divide(this.convertToMillimeters(lengthMeasurement), 9.461e+18)
  }

  private convertToInches(lengthMeasurement: Measurement<MeasurementType.length>): NumericValue {
    return divide(this.convertToMillimeters(lengthMeasurement), 25.4)
  }

  private convertToFeet(lengthMeasurement: Measurement<MeasurementType.length>): NumericValue {
    return divide(this.convertToInches(lengthMeasurement), 12)
  }

  private convertToYards(lengthMeasurement: Measurement<MeasurementType.length>): NumericValue {
    return divide(this.convertToFeet(lengthMeasurement), 3)
  }

  private convertToMiles(lengthMeasurement: Measurement<MeasurementType.length>): NumericValue {
    return divide(this.convertToYards(lengthMeasurement), 1760)
  }

  getUnitConvertedValue(
    conversionMeasurement: Measurement<MeasurementType.length>,
    convertUnit: LengthUnits
  ): Measurement<MeasurementType.length> {
    switch (convertUnit) {
      case Unit.millimeter:
        return { value: this.convertToMillimeters(conversionMeasurement), unit: convertUnit }
      case Unit.centimeter:
        return { value: this.convertToCentimeters(conversionMeasurement), unit: convertUnit }
      case Unit.meter:
        return { value: this.convertToMeters(conversionMeasurement), unit: convertUnit }
      case Unit.kilometer:
        return { value: this.convertToKilometers(conversionMeasurement), unit: convertUnit }
      case Unit.lightyear:
        return { value: this.convertToLightYear(conversionMeasurement), unit: convertUnit }
      case Unit.inch:
        return { value: this.convertToInches(conversionMeasurement), unit: convertUnit }
      case Unit.foot:
        return { value: this.convertToFeet(conversionMeasurement), unit: convertUnit }
      case Unit.yard:
        return { value: this.convertToYards(conversionMeasurement), unit: convertUnit }
      case Unit.mile:
        return { value: this.convertToMiles(conversionMeasurement), unit: convertUnit }
    }
  }
}