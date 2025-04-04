import { MeasurementType, MeasurementStandard } from '../../../measurements/types'
import SortedUnitUtils from '../../../measurements/units/SortedUnitUtils'
import Unit, { LengthUnits } from '../../../measurements/units/units'

describe('SortedUnitUtils', () => {
  describe('getSortedUnits', () => {
    it('should return sorted units based on conversion factors for international standard', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length, MeasurementStandard.international)
      const sortedUnits = unitSortUtils.getSortedUnits()

      expect(sortedUnits).toEqual([Unit.millimeter, Unit.centimeter, Unit.meter, Unit.kilometer, Unit.lightyear])
    })

    it('should return sorted units based on conversion factors for imperial standard', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length, MeasurementStandard.imperial)
      const sortedUnits = unitSortUtils.getSortedUnits()

      expect(sortedUnits).toEqual([Unit.inch, Unit.foot, Unit.yard, Unit.mile])
    })

    it('should return all units sorted if no standard is provided', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length)
      const sortedUnits = unitSortUtils.getSortedUnits()

      expect(sortedUnits).toEqual([Unit.millimeter, Unit.centimeter, Unit.inch, Unit.foot, Unit.yard, Unit.meter, Unit.kilometer, Unit.mile, Unit.lightyear])
    })
  })

  describe('getNextUnit', () => {
    it('should return the next unit in the sorted list', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length)
      const nextUnit = unitSortUtils.getNextUnit(Unit.centimeter)

      expect(nextUnit).toBe(Unit.inch)
    })

    it('should return the next international unit if international unit standard passed', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length, MeasurementStandard.international)
      const nextUnit = unitSortUtils.getNextUnit(Unit.centimeter)

      expect(nextUnit).toBe(Unit.meter)
    })

    it('should return the next imperial unit if imperial unit standard passed', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length, MeasurementStandard.imperial)
      const nextUnit = unitSortUtils.getNextUnit(Unit.yard)

      expect(nextUnit).toBe(Unit.mile)
    })

    it('should return the same unit if it is the last in the list', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length)
      const nextUnit = unitSortUtils.getNextUnit(Unit.lightyear)

      expect(nextUnit).toBe(Unit.lightyear)
    })

    it('should return the same unit if it is not found in the list', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length)
      const nextUnit = unitSortUtils.getNextUnit('unitD' as LengthUnits)

      expect(nextUnit).toBe('unitD')
    })
  })

  describe('getPreviousUnit', () => {
    it('should return the previous unit in the sorted list', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length)
      const previousUnit = unitSortUtils.getPreviousUnit(Unit.inch)

      expect(previousUnit).toBe(Unit.centimeter)
    })

    it('should return the same unit if it is the first in the list', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length)
      const previousUnit = unitSortUtils.getPreviousUnit(Unit.millimeter)

      expect(previousUnit).toBe(Unit.millimeter)
    })

    it('should return the previous international unit if international unit standard passed', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length, MeasurementStandard.international)
      const nextUnit = unitSortUtils.getPreviousUnit(Unit.meter)

      expect(nextUnit).toBe(Unit.centimeter)
    })

    it('should return the previous imperial unit if imperial unit standard passed', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length, MeasurementStandard.imperial)
      const nextUnit = unitSortUtils.getPreviousUnit(Unit.mile)

      expect(nextUnit).toBe(Unit.yard)
    })

    it('should return the same unit if it is not found in the list', () => {
      const unitSortUtils = new SortedUnitUtils(MeasurementType.length)
      const previousUnit = unitSortUtils.getPreviousUnit('unitD' as LengthUnits)

      expect(previousUnit).toBe('unitD')
    })
  })
})