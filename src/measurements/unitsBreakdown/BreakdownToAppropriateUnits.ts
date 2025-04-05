import { getIntegerAndDecimalSeparatedValue, NumericValue } from '../../utils/numberUtils'
import { isEqual, isGreaterThan } from '../../utils/numericalOperations'
import { MeasurementType, Measurement } from '../types'
import SortedUnitUtils from '../units/SortedUnitUtils'
import { MeasurementStandard } from '../types'
import UnitConverter from '../unitsConverter/UnitConverter'
import BreakdownInUnits from './BreakdownInUnits'

export default class BreakdownToAppropriateUnits<T extends MeasurementType> implements BreakdownInUnits<T> {
  private readonly sortedUnitUtils: SortedUnitUtils<T>

  constructor(measurementType: T, measurementStandard?: MeasurementStandard) {
    this.sortedUnitUtils = new SortedUnitUtils(measurementType, measurementStandard)
  }

  private shouldCalculateForNextUnit(value: NumericValue): boolean {
    return isGreaterThan(value, 1) || isEqual(value, 1)
  }

  private shouldCalculateForPreviousUnit(value: NumericValue): boolean {
    return isGreaterThan(value, 0) && !isGreaterThan(value, 1) && !isEqual(value, 1)
  }

  private getAppropriateMeasurementForNextUnit(measurement: Measurement<T>, unitConverter: UnitConverter<T>): Measurement<T> {
    const nextUnit = this.sortedUnitUtils.getNextUnit(measurement.unit)
    if (nextUnit === measurement.unit) {
      return measurement
    }
    const nextUnitValue = unitConverter.getUnitConvertedValue(measurement, nextUnit)
    if (this.shouldCalculateForNextUnit(nextUnitValue.value)) {
      return this.getAppropriateMeasurementForNextUnit(nextUnitValue, unitConverter)
    }
    return measurement
  }

  private getAppropriateMeasurementForPreviousUnit(measurement: Measurement<T>, unitConverter: UnitConverter<T>): Measurement<T> {
    const previousUnit = this.sortedUnitUtils.getPreviousUnit(measurement.unit)
    if (previousUnit === measurement.unit) {
      return measurement
    }
    const previousUnitValue = unitConverter.getUnitConvertedValue(measurement, previousUnit)
    if (this.shouldCalculateForPreviousUnit(previousUnitValue.value)) {
      return this.getAppropriateMeasurementForPreviousUnit(previousUnitValue, unitConverter)
    }
    return previousUnitValue
  }

  private getClosestAppropriateMeasurement(measurement: Measurement<T>, unitConverter: UnitConverter<T>): Measurement<T> {
    if (this.shouldCalculateForNextUnit(measurement.value)) {
      return this.getAppropriateMeasurementForNextUnit(measurement, unitConverter)
    }

    if (this.shouldCalculateForPreviousUnit(measurement.value)) {
      return this.getAppropriateMeasurementForPreviousUnit(measurement, unitConverter)
    }

    return measurement
  }

  getUnitsBreakdown(measurement: Measurement<T>, unitConverter: UnitConverter<T>, unitBreakdownFromPreviousIteration: Measurement<T>[] = []): Measurement<T>[] {
    const { unit: appropriateUnit, value } = this.getClosestAppropriateMeasurement(measurement, unitConverter)

    const intAndDecimal = getIntegerAndDecimalSeparatedValue(value)
    const intPartMeasurementAppendedArray = [...unitBreakdownFromPreviousIteration, { unit: appropriateUnit, value: intAndDecimal[0] }]
    if (intAndDecimal[0] && !intAndDecimal[1]) {
      return intPartMeasurementAppendedArray
    }
  
    const decimalPointMeasurement = this.getClosestAppropriateMeasurement({ unit: appropriateUnit, value: intAndDecimal[1] }, unitConverter)
    if (decimalPointMeasurement.unit === measurement.unit && isEqual(value, measurement.value)) {
      return [...unitBreakdownFromPreviousIteration, decimalPointMeasurement]
    }

    return this.getUnitsBreakdown(decimalPointMeasurement, unitConverter, intPartMeasurementAppendedArray)
  }
}