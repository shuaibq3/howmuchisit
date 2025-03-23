import BreakdownUnitsImpl from '../../../measurements/unitsBreakdown/BreakdownUnitsImpl'
import { MeasurementStandard, TimeUnits, Unit } from '../../../measurements/units/units'
import TimeUnitConverter from '../../../measurements/unitsConverter/TimeConverter'
import MeasurementType from '../../../measurements/config/types'

describe('BreakdownTimeUnits', () => {
  const timeUnitConverter = new TimeUnitConverter()
  const breakdownUnits = new BreakdownUnitsImpl(MeasurementType.time)

  describe('getNextUnit', () => {
    it('should return the next time unit correctly', () => {
      expect(breakdownUnits['getNextUnit'](Unit.millisecond)).toBe(Unit.second)
      expect(breakdownUnits['getNextUnit'](Unit.second)).toBe(Unit.minute)
      expect(breakdownUnits['getNextUnit'](Unit.minute)).toBe(Unit.hour)
      expect(breakdownUnits['getNextUnit'](Unit.hour)).toBe(Unit.day)
      expect(breakdownUnits['getNextUnit'](Unit.day)).toBe(Unit.week)
      expect(breakdownUnits['getNextUnit'](Unit.week)).toBe(Unit.month)
      expect(breakdownUnits['getNextUnit'](Unit.month)).toBe(Unit.year)
      expect(breakdownUnits['getNextUnit'](Unit.year)).toBe(Unit.decade)
      expect(breakdownUnits['getNextUnit'](Unit.decade)).toBe(Unit.century)
      expect(breakdownUnits['getNextUnit'](Unit.century)).toBe(Unit.millennium)
      expect(breakdownUnits['getNextUnit'](Unit.millennium)).toBe(Unit.millennium)
    })
  })

  describe('getPreviousUnit', () => {
    it('should return the previous time unit correctly', () => {
      expect(breakdownUnits['getPreviousUnit'](Unit.millennium)).toBe(Unit.century)
      expect(breakdownUnits['getPreviousUnit'](Unit.century)).toBe(Unit.decade)
      expect(breakdownUnits['getPreviousUnit'](Unit.decade)).toBe(Unit.year)
      expect(breakdownUnits['getPreviousUnit'](Unit.year)).toBe(Unit.month)
      expect(breakdownUnits['getPreviousUnit'](Unit.month)).toBe(Unit.week)
      expect(breakdownUnits['getPreviousUnit'](Unit.week)).toBe(Unit.day)
      expect(breakdownUnits['getPreviousUnit'](Unit.day)).toBe(Unit.hour)
      expect(breakdownUnits['getPreviousUnit'](Unit.hour)).toBe(Unit.minute)
      expect(breakdownUnits['getPreviousUnit'](Unit.minute)).toBe(Unit.second)
      expect(breakdownUnits['getPreviousUnit'](Unit.second)).toBe(Unit.millisecond)
      expect(breakdownUnits['getPreviousUnit'](Unit.millisecond)).toBe(Unit.millisecond)
    })

    describe('all previous and next units for international and imperial standards are the same', () => {
      const breakdownUnitsInternational = new BreakdownUnitsImpl(MeasurementType.time, MeasurementStandard.international)
      const breakdownUnitsImperial = new BreakdownUnitsImpl(MeasurementType.time, MeasurementStandard.imperial)

      it('getPreviousUnit', () => {
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.millennium)).toBe(breakdownUnitsImperial['getPreviousUnit'](Unit.millennium))
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.century)).toBe(breakdownUnitsImperial['getPreviousUnit'](Unit.century))
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.decade)).toBe(breakdownUnitsImperial['getPreviousUnit'](Unit.decade))
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.year)).toBe(breakdownUnitsImperial['getPreviousUnit'](Unit.year))
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.month)).toBe(breakdownUnitsImperial['getPreviousUnit'](Unit.month))
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.week)).toBe(breakdownUnitsImperial['getPreviousUnit'](Unit.week))
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.day)).toBe(breakdownUnitsImperial['getPreviousUnit'](Unit.day))
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.hour)).toBe(breakdownUnitsImperial['getPreviousUnit'](Unit.hour))
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.minute)).toBe(breakdownUnitsImperial['getPreviousUnit'](Unit.minute))
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.second)).toBe(breakdownUnitsImperial['getPreviousUnit'](Unit.second))
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.millisecond)).toBe(breakdownUnitsImperial['getPreviousUnit'](Unit.millisecond))
      })

      it('getPreviousUnit', () => {
        expect(breakdownUnitsInternational['getNextUnit'](Unit.millennium)).toBe(breakdownUnitsImperial['getNextUnit'](Unit.millennium))
        expect(breakdownUnitsInternational['getNextUnit'](Unit.century)).toBe(breakdownUnitsImperial['getNextUnit'](Unit.century))
        expect(breakdownUnitsInternational['getNextUnit'](Unit.decade)).toBe(breakdownUnitsImperial['getNextUnit'](Unit.decade))
        expect(breakdownUnitsInternational['getNextUnit'](Unit.year)).toBe(breakdownUnitsImperial['getNextUnit'](Unit.year))
        expect(breakdownUnitsInternational['getNextUnit'](Unit.month)).toBe(breakdownUnitsImperial['getNextUnit'](Unit.month))
        expect(breakdownUnitsInternational['getNextUnit'](Unit.week)).toBe(breakdownUnitsImperial['getNextUnit'](Unit.week))
        expect(breakdownUnitsInternational['getNextUnit'](Unit.day)).toBe(breakdownUnitsImperial['getNextUnit'](Unit.day))
        expect(breakdownUnitsInternational['getNextUnit'](Unit.hour)).toBe(breakdownUnitsImperial['getNextUnit'](Unit.hour))
        expect(breakdownUnitsInternational['getNextUnit'](Unit.minute)).toBe(breakdownUnitsImperial['getNextUnit'](Unit.minute))
        expect(breakdownUnitsInternational['getNextUnit'](Unit.second)).toBe(breakdownUnitsImperial['getNextUnit'](Unit.second))
        expect(breakdownUnitsInternational['getNextUnit'](Unit.millisecond)).toBe(breakdownUnitsImperial['getNextUnit'](Unit.millisecond))
      })
    })
  })

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