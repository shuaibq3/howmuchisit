import { NumericValue } from '../../utils/numberUtils'
import { divide, multiply } from '../../utils/numericalOperations'
import MeasurementType from '../config/types'
import Unit, { Measurement, TimeUnits } from '../units/units'
import UnitConverter from './UnitConverter'

/*
* This class approximates the numbers, and does not return the exact number. 
* For simplicity, it uses 30 days per month, and 365 days per year, and does not consider the exceptions.
* The tests are adjusted according to the approximation.
*/
export default class TimeUnitConverter implements UnitConverter<MeasurementType.time> {
  getUnitType(): MeasurementType.time {
    return MeasurementType.time
  }

  private convertToMilliseconds(timeMeasurement: Measurement<MeasurementType.time>): NumericValue {
    switch (timeMeasurement.unit) {
      case Unit.millisecond:
        return timeMeasurement.value
      case Unit.second:
        return multiply(timeMeasurement.value, 1000)
      case Unit.minute:
        return multiply(timeMeasurement.value, 1000, 60)
      case Unit.hour:
        return multiply(timeMeasurement.value, 1000, 60, 60)
      case Unit.day:
        return multiply(timeMeasurement.value, 1000, 60, 60, 24)
      case Unit.week:
        return multiply(timeMeasurement.value, 1000, 60, 60, 24, 7)
      case Unit.month:
        return multiply(timeMeasurement.value, 1000, 60, 60, 24, 30)
      case Unit.year:
        return multiply(timeMeasurement.value, 1000, 60, 60, 24, 365)
      case Unit.decade:
        return multiply(timeMeasurement.value, 1000, 60, 60, 24, 365, 10)
      case Unit.century:
        return multiply(timeMeasurement.value, 1000, 60, 60, 24, 365, 100)
      case Unit.millennium:
        return multiply(timeMeasurement.value, 1000, 60, 60, 24, 365, 1000)
    }
  }

  private convertToSeconds(timeMeasurement: Measurement<MeasurementType.time>): NumericValue {
    return divide(this.convertToMilliseconds(timeMeasurement), 1000)
  }

  private convertToMinutes(timeMeasurement: Measurement<MeasurementType.time>): NumericValue {
    return divide(this.convertToSeconds(timeMeasurement), 60)
  }

  private convertToHours(timeMeasurement: Measurement<MeasurementType.time>): NumericValue {
    return divide(this.convertToMinutes(timeMeasurement), 60)
  }

  private convertToDays(timeMeasurement: Measurement<MeasurementType.time>): NumericValue {
    return divide(this.convertToHours(timeMeasurement), 24)
  }

  private convertToWeeks(timeMeasurement: Measurement<MeasurementType.time>): NumericValue {
    return divide(this.convertToDays(timeMeasurement), 7)
  }

  private convertToMonths(timeMeasurement: Measurement<MeasurementType.time>): NumericValue {
    return divide(this.convertToDays(timeMeasurement), 30)
  }

  private convertToYears(timeMeasurement: Measurement<MeasurementType.time>): NumericValue {
    return divide(this.convertToDays(timeMeasurement), 365)
  }

  private convertToDecades(timeMeasurement: Measurement<MeasurementType.time>): NumericValue {
    return divide(this.convertToYears(timeMeasurement), 10)
  }

  private convertToCenturies(timeMeasurement: Measurement<MeasurementType.time>): NumericValue {
    return divide(this.convertToYears(timeMeasurement), 100)
  }

  private convertToMillennium(timeMeasurement: Measurement<MeasurementType.time>): NumericValue {
    return divide(this.convertToYears(timeMeasurement), 1000)
  }

  getUnitConvertedValue(conversionMeasurement: Measurement<MeasurementType.time>, convertUnit: TimeUnits): Measurement<MeasurementType.time> {
    switch (convertUnit) {
      case Unit.millisecond:
        return { value: this.convertToMilliseconds(conversionMeasurement), unit: convertUnit }
      case Unit.second:
        return { value: this.convertToSeconds(conversionMeasurement), unit: convertUnit }
      case Unit.minute:
        return { value: this.convertToMinutes(conversionMeasurement), unit: convertUnit }
      case Unit.hour:
        return { value: this.convertToHours(conversionMeasurement), unit: convertUnit }
      case Unit.day:
        return { value: this.convertToDays(conversionMeasurement), unit: convertUnit }
      case Unit.week:
        return { value: this.convertToWeeks(conversionMeasurement), unit: convertUnit }
      case Unit.month:
        return { value: this.convertToMonths(conversionMeasurement), unit: convertUnit }
      case Unit.year:
        return { value: this.convertToYears(conversionMeasurement), unit: convertUnit }
      case Unit.decade:
        return { value: this.convertToDecades(conversionMeasurement), unit: convertUnit }
      case Unit.century:
        return { value: this.convertToCenturies(conversionMeasurement), unit: convertUnit }
      case Unit.millennium:
        return { value: this.convertToMillennium(conversionMeasurement), unit: convertUnit }
    }
  }
}