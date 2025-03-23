import BreakdownUnitsImpl from '../../../measurements/unitsBreakdown/BreakdownUnitsImpl'
import { MeasurementStandard, LengthUnits, Unit } from '../../../measurements/units/units'
import MeasurementType from '../../../measurements/config/types'
import LengthUnitConverter from '../../../measurements/unitsConverter/LengthUnitConverter'

describe('BreakdownLengthUnits', () => {
  const lengthUnitConverter = new LengthUnitConverter()

  describe('BreakdownUnitsImpl for all length units', () => {
    const breakdownUnits = new BreakdownUnitsImpl(MeasurementType.length)

    describe('getNextTimeUnit', () => {
      it('should return the next length unit correctly', () => {
        expect(breakdownUnits['getNextUnit'](Unit.millimeter)).toBe(Unit.centimeter)
        expect(breakdownUnits['getNextUnit'](Unit.centimeter)).toBe(Unit.inch)
        expect(breakdownUnits['getNextUnit'](Unit.inch)).toBe(Unit.foot)
        expect(breakdownUnits['getNextUnit'](Unit.foot)).toBe(Unit.yard)
        expect(breakdownUnits['getNextUnit'](Unit.yard)).toBe(Unit.meter)
        expect(breakdownUnits['getNextUnit'](Unit.meter)).toBe(Unit.kilometer)
        expect(breakdownUnits['getNextUnit'](Unit.kilometer)).toBe(Unit.mile)
        expect(breakdownUnits['getNextUnit'](Unit.mile)).toBe(Unit.lightyear)
        expect(breakdownUnits['getNextUnit'](Unit.lightyear)).toBe(Unit.lightyear)
      })
    })
  
    describe('getPreviousUnit', () => {
      it('should return the previous length unit correctly', () => {
        expect(breakdownUnits['getPreviousUnit'](Unit.lightyear)).toBe(Unit.mile)
        expect(breakdownUnits['getPreviousUnit'](Unit.mile)).toBe(Unit.kilometer)
        expect(breakdownUnits['getPreviousUnit'](Unit.kilometer)).toBe(Unit.meter)
        expect(breakdownUnits['getPreviousUnit'](Unit.meter)).toBe(Unit.yard)
        expect(breakdownUnits['getPreviousUnit'](Unit.yard)).toBe(Unit.foot)
        expect(breakdownUnits['getPreviousUnit'](Unit.foot)).toBe(Unit.inch)
        expect(breakdownUnits['getPreviousUnit'](Unit.inch)).toBe(Unit.centimeter)
        expect(breakdownUnits['getPreviousUnit'](Unit.centimeter)).toBe(Unit.millimeter)
        expect(breakdownUnits['getPreviousUnit'](Unit.millimeter)).toBe(Unit.millimeter)
      })
    })
  })

  describe('BreakdownUnitsImpl for international length units', () => {
    const breakdownUnitsInternational = new BreakdownUnitsImpl(MeasurementType.length, MeasurementStandard.international)

    describe('getNextTimeUnit', () => {
      it('should return the next length unit correctly', () => {
        expect(breakdownUnitsInternational['getNextUnit'](Unit.millimeter)).toBe(Unit.centimeter)
        expect(breakdownUnitsInternational['getNextUnit'](Unit.centimeter)).toBe(Unit.meter)
        expect(breakdownUnitsInternational['getNextUnit'](Unit.meter)).toBe(Unit.kilometer)
        expect(breakdownUnitsInternational['getNextUnit'](Unit.kilometer)).toBe(Unit.lightyear)
        expect(breakdownUnitsInternational['getNextUnit'](Unit.lightyear)).toBe(Unit.lightyear)
      })
    })
  
    describe('getPreviousUnit', () => {
      it('should return the previous length unit correctly', () => {
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.lightyear)).toBe(Unit.kilometer)
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.kilometer)).toBe(Unit.meter)
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.meter)).toBe(Unit.centimeter)
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.centimeter)).toBe(Unit.millimeter)
        expect(breakdownUnitsInternational['getPreviousUnit'](Unit.millimeter)).toBe(Unit.millimeter)
      })
    })
  })

  describe('BreakdownUnitsImpl for imperial length units', () => {
    const breakdownUnitsImperial = new BreakdownUnitsImpl(MeasurementType.length, MeasurementStandard.imperial)

    describe('getNextTimeUnit', () => {
      it('should return the next length unit correctly', () => {
        expect(breakdownUnitsImperial['getNextUnit'](Unit.inch)).toBe(Unit.foot)
        expect(breakdownUnitsImperial['getNextUnit'](Unit.foot)).toBe(Unit.yard)
        expect(breakdownUnitsImperial['getNextUnit'](Unit.yard)).toBe(Unit.mile)
        expect(breakdownUnitsImperial['getNextUnit'](Unit.mile)).toBe(Unit.mile)
      })
    })
  
    describe('getPreviousUnit', () => {
      it('should return the previous length unit correctly', () => {
        expect(breakdownUnitsImperial['getPreviousUnit'](Unit.mile)).toBe(Unit.yard)
        expect(breakdownUnitsImperial['getPreviousUnit'](Unit.yard)).toBe(Unit.foot)
        expect(breakdownUnitsImperial['getPreviousUnit'](Unit.foot)).toBe(Unit.inch)
        expect(breakdownUnitsImperial['getPreviousUnit'](Unit.inch)).toBe(Unit.inch)
      })
    })
  })
  
  /*
  * Conversion values are tested in LengthUnitConverter unit tests. Here, the unit breakdowns are tested with international units.
  * Imperial units should work the same way, as the getPreviousUnit and getNextUnit functions return the correct imperial units.
  * The above tests cover the getPreviousUnit and getNextUnit functions.
  */
  const breakdownUnits = new BreakdownUnitsImpl(MeasurementType.length, MeasurementStandard.international)

  describe('getAppropriateMeasurementForNextUnit', () => {
    it('should return the same measurement no next unit exists', () => {
      const lengthMeasurement = { value: 0.5, unit: Unit.lightyear as LengthUnits }
      const result = breakdownUnits['getAppropriateMeasurementForNextUnit'](lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual(lengthMeasurement)
    })
  
    it('should recursively find the appropriate next unit measurement', () => {
      const result = breakdownUnits['getAppropriateMeasurementForNextUnit']({ value: 1000000, unit: Unit.millimeter }, lengthUnitConverter)
      expect(result).toEqual({ value: 1, unit: Unit.kilometer })
    })
  })
  
  describe('getAppropriateMeasurementForPreviousUnit', () => {
    it('should return the same measurement if no previous unit exists', () => {
      const lengthMeasurement = { value: 0.5, unit: Unit.millimeter as LengthUnits }
      const result = breakdownUnits['getAppropriateMeasurementForPreviousUnit'](lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual(lengthMeasurement)
    })
  
    it('should recursively find the appropriate previous unit measurement', () => {
      const result = breakdownUnits['getAppropriateMeasurementForPreviousUnit']({ value: 0.0005, unit: Unit.kilometer }, lengthUnitConverter)
      expect(result).toEqual({ value: 50, unit: Unit.centimeter })
    })
  })
  
  describe('getClosestAppropriateMeasurement', () => {
    it('should return the same measurement if it is already appropriate', () => {
      const lengthMeasurement = { value: 5, unit: Unit.meter as LengthUnits }
      const result = breakdownUnits['getClosestAppropriateMeasurement'](lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual(lengthMeasurement)
    })
  
    it('should return the next appropriate unit measurement if value is greater than 1', () => {
      const lengthMeasurement = { value: 1200000, unit: Unit.millimeter as LengthUnits }
      const result = breakdownUnits['getClosestAppropriateMeasurement'](lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual({ value: 1.2, unit: Unit.kilometer })
    })
  
    it('should return the previous appropriate unit measurement if value is less than 1', () => {
      const lengthMeasurement = { value: 0.0005, unit: Unit.kilometer as LengthUnits }
      const result = breakdownUnits['getClosestAppropriateMeasurement'](lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual({ value: 50, unit: Unit.centimeter })
    })
  
    it('should handle edge case where value is exactly 1', () => {
      const lengthMeasurement = { value: 1, unit: Unit.meter as LengthUnits }
      const result = breakdownUnits['getClosestAppropriateMeasurement'](lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual(lengthMeasurement)
    })
  
    it('should return the same measurement for the largest unit', () => {
      const lengthMeasurement = { value: 5, unit: Unit.lightyear as LengthUnits }
      const result = breakdownUnits['getClosestAppropriateMeasurement'](lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual(lengthMeasurement)
    })
  
    it('should return the same measurement for the smallest unit less than 1', () => {
      const lengthMeasurement = { value: 0.5, unit: Unit.millimeter as LengthUnits }
      const result = breakdownUnits['getClosestAppropriateMeasurement'](lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual(lengthMeasurement)
    })
  })
    
  describe('getUnitsBreakdown', () => {
    it('should return a single measurement if the value is already appropriate', () => {
      const lengthMeasurement = { value: 5, unit: Unit.meter as LengthUnits }
      const result = breakdownUnits.getUnitsBreakdown(lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual([{ value: 5, unit: Unit.meter }])
    })
  
    it('should break down a large value into multiple units', () => {
      const lengthMeasurement = { value: 1200000, unit: Unit.millimeter as LengthUnits }
      const result = breakdownUnits.getUnitsBreakdown(lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual([{ value: 1, unit: Unit.kilometer }, { value: 200, unit: Unit.meter }])
    })
  
    it('should handle values with decimal points and break them into appropriate units', () => {
      const lengthMeasurement = { value: 1.5, unit: Unit.kilometer as LengthUnits }
      const result = breakdownUnits.getUnitsBreakdown(lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual([{ value: 1, unit: Unit.kilometer }, { value: 500, unit: Unit.meter }])
    })
  
    it('should handle values less than 1 and break them into smaller units', () => {
      const lengthMeasurement = { value: 0.005, unit: Unit.kilometer as LengthUnits }
      const result = breakdownUnits.getUnitsBreakdown(lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual([{ value: 5, unit: Unit.meter }])
    })
  
    it('should return a single measurement for the smallest unit if value is less than 1', () => {
      const lengthMeasurement = { value: 0.5, unit: Unit.millimeter as LengthUnits }
      const result = breakdownUnits.getUnitsBreakdown(lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual([{ value: 0.5, unit: Unit.millimeter }])
    })
  
    it('should return a single measurement for the largest unit if value is greater than 1', () => {
      const lengthMeasurement = { value: 10, unit: Unit.lightyear as LengthUnits }
      const result = breakdownUnits.getUnitsBreakdown(lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual([{ value: 10, unit: Unit.lightyear }])
    })
  
    it('should handle edge cases where value is exactly 1', () => {
      const lengthMeasurement = { value: 1, unit: Unit.meter as LengthUnits }
      const result = breakdownUnits.getUnitsBreakdown(lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual([{ value: 1, unit: Unit.meter }])
    })
  
    it('should handle large values and break them into multiple levels of units', () => {
      const lengthMeasurement = { value: 2.5, unit: Unit.lightyear as LengthUnits }
      const result = breakdownUnits.getUnitsBreakdown(lengthMeasurement, lengthUnitConverter)
      expect(result).toEqual([{ value: 2, unit: Unit.lightyear }, { value: 4730500000000, unit: Unit.kilometer }])
    })
  })
})

  