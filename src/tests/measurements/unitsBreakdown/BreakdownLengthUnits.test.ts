import BreakdownUnitsImpl from '../../../measurements/unitsBreakdown/BreakdownUnitsImpl'
import { MeasurementStandard, LengthUnits, Unit } from '../../../measurements/units/units'
import MeasurementType from '../../../measurements/config/types'
import UniversalUnitConverter from '../../../measurements/unitsConverter/UniversalUnitConverter'
import LengthConversionFactors from '../../../measurements/unitsConverter/conversions/lengthConversionFactors'

describe('BreakdownLengthUnits', () => {
  const lengthUnitConverter = new UniversalUnitConverter(LengthConversionFactors)
  /*
  * Conversion values are tested in UniversalUnitConverter unit tests. Here, the unit breakdowns are tested with international units.
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

  