import BreakdownUnitsImpl from '../../../measurements/unitsBreakdown/BreakdownUnitsImpl'
import { TimeUnits, Unit } from '../../../measurements/units/units'
import { MeasurementType } from '../../../measurements/types'
import UniversalUnitConverter from '../../../measurements/unitsConverter/UniversalUnitConverter'
import TimeConversionFactors from '../../../measurements/unitsConverter/conversions/timeConversionFactors'

describe('BreakdownTimeUnits', () => {
  const timeUnitConverter = new UniversalUnitConverter(TimeConversionFactors)
  const breakdownUnits = new BreakdownUnitsImpl(MeasurementType.time)

  describe('getAppropriateMeasurementForNextUnit', () => {
    it('should return the same measurement no next unit exists', () => {
      const timeMeasurement = { value: 0.5, unit: Unit.millennium as TimeUnits }
      const result = breakdownUnits['getAppropriateMeasurementForNextUnit'](timeMeasurement, timeUnitConverter)
      expect(result).toEqual(timeMeasurement)
    })

    it('should recursively find the appropriate next unit measurement', () => {
      const result = breakdownUnits['getAppropriateMeasurementForNextUnit']({ value: 120000, unit: Unit.millisecond }, timeUnitConverter)
      expect(result).toEqual({ value: 2, unit: Unit.minute })
    })
  })

  describe('getAppropriateMeasurementForPreviousUnit', () => {
    it('should return the same measurement if no previous unit exists', () => {
      const timeMeasurement = { value: 0.5, unit: Unit.millisecond as TimeUnits }
      const result = breakdownUnits['getAppropriateMeasurementForPreviousUnit'](timeMeasurement, timeUnitConverter)
      expect(result).toEqual(timeMeasurement)
    })

    it('should recursively find the appropriate previous unit measurement', () => {
      const result = breakdownUnits['getAppropriateMeasurementForPreviousUnit']({ value: 0.005, unit: Unit.hour }, timeUnitConverter)
      expect(result).toEqual({ value: 18, unit: Unit.second })
    })
  })

  describe('getClosestAppropriateMeasurement', () => {
    it('should return the same measurement if it is already appropriate', () => {
      const timeMeasurement = { value: 5, unit: Unit.minute as TimeUnits }
      const result = breakdownUnits['getClosestAppropriateMeasurement'](timeMeasurement, timeUnitConverter)
      expect(result).toEqual(timeMeasurement)
    })

    it('should return the next appropriate unit measurement if value is greater than 1', () => {
      const timeMeasurement = { value: 120000, unit: Unit.millisecond as TimeUnits }
      const result = breakdownUnits['getClosestAppropriateMeasurement'](timeMeasurement, timeUnitConverter)
      expect(result).toEqual({ value: 2, unit: Unit.minute })
    })

    it('should return the previous appropriate unit measurement if value is less than 1', () => {
      const timeMeasurement = { value: 0.005, unit: Unit.hour as TimeUnits }
      const result = breakdownUnits['getClosestAppropriateMeasurement'](timeMeasurement, timeUnitConverter)
      expect(result).toEqual({ value: 18, unit: Unit.second })
    })

    it('should handle edge case where value is exactly 1', () => {
      const timeMeasurement = { value: 1, unit: Unit.day as TimeUnits }
      const result = breakdownUnits['getClosestAppropriateMeasurement'](timeMeasurement, timeUnitConverter)
      expect(result).toEqual(timeMeasurement)
    })

    it('should return the same measurement for the largest unit', () => {
      const timeMeasurement = { value: 5, unit: Unit.millennium as TimeUnits }
      const result = breakdownUnits['getClosestAppropriateMeasurement'](timeMeasurement, timeUnitConverter)
      expect(result).toEqual(timeMeasurement)
    })

    it('should return the same measurement for the smallest unit less than 1', () => {
      const timeMeasurement = { value: 0.5, unit: Unit.millisecond as TimeUnits }
      const result = breakdownUnits['getClosestAppropriateMeasurement'](timeMeasurement, timeUnitConverter)
      expect(result).toEqual(timeMeasurement)
    })
  })
  
  describe('getUnitsBreakdown', () => {
    it('should return a single measurement if the value is already appropriate', () => {
      const timeMeasurement = { value: 5, unit: Unit.minute as TimeUnits }
      const result = breakdownUnits.getUnitsBreakdown(timeMeasurement, timeUnitConverter)
      expect(result).toEqual([{ value: 5, unit: Unit.minute }])
    })

    it('should break down a large value into multiple units', () => {
      const timeMeasurement = { value: 1 * 24 * 60 * 60 * 7 * 1000, unit: Unit.millisecond as TimeUnits }
      const result = breakdownUnits.getUnitsBreakdown(timeMeasurement, timeUnitConverter)
      expect(result).toEqual([{ value: 1, unit: Unit.week }])
    })

    it('should break down a large value into multiple units (2)', () => {
      const timeMeasurement = { value: 3661, unit: Unit.second as TimeUnits }
      const result = breakdownUnits.getUnitsBreakdown(timeMeasurement, timeUnitConverter)
      expect(result).toEqual([
        { value: 1, unit: Unit.hour }, 
        { value: 1, unit: Unit.minute }, 
        { value: 1, unit: Unit.second }, 
        { value: 200, unit: Unit.millisecond }
      ])
    })

    it('should handle values with decimal points and break them into appropriate units', () => {
      const timeMeasurement = { value: 1.5, unit: Unit.hour as TimeUnits }
      const result = breakdownUnits.getUnitsBreakdown(timeMeasurement, timeUnitConverter)
      expect(result).toEqual([{ value: 1, unit: Unit.hour }, { value: 30, unit: Unit.minute }])
    })

    it('should handle values less than 1 and break them into smaller units', () => {
      const timeMeasurement = { value: 0.005, unit: Unit.hour as TimeUnits }
      const result = breakdownUnits.getUnitsBreakdown(timeMeasurement, timeUnitConverter)
      expect(result).toEqual([{ value: 18, unit: Unit.second }])
    })

    it('should return a single measurement for the smallest unit if value is less than 1', () => {
      const timeMeasurement = { value: 0.5, unit: Unit.millisecond as TimeUnits }
      const result = breakdownUnits.getUnitsBreakdown(timeMeasurement, timeUnitConverter)
      expect(result).toEqual([{ value: 0.5, unit: Unit.millisecond }])
    })

    it('should return a single measurement for the largest unit if value is greater than 1', () => {
      const timeMeasurement = { value: 10, unit: Unit.millennium as TimeUnits }
      const result = breakdownUnits.getUnitsBreakdown(timeMeasurement, timeUnitConverter)
      expect(result).toEqual([{ value: 10, unit: Unit.millennium }])
    })

    it('should handle edge cases where value is exactly 1', () => {
      const timeMeasurement = { value: 1, unit: Unit.day as TimeUnits }
      const result = breakdownUnits.getUnitsBreakdown(timeMeasurement, timeUnitConverter)
      expect(result).toEqual([{ value: 1, unit: Unit.day }])
    })

    it('should handle large values and break them into multiple levels of units', () => {
      const timeMeasurement = { value: 525600, unit: Unit.minute as TimeUnits }
      const result = breakdownUnits.getUnitsBreakdown(timeMeasurement, timeUnitConverter)
      expect(result).toEqual([{ value: 1, unit: Unit.year }])
    })
  })
})