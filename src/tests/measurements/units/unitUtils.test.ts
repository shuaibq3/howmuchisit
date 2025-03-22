import { getMeasurementUnitsStandard, getSortedMeasurementUnitsForType } from '../../../measurements/units/unitUtils'
import MeasurementType from '../../../measurements/config/types'
import Unit, { MeasurementStandard, TimeUnitsList } from '../../../measurements/units/units'
import GenericError from '../../../utils/errors/GenericError'

describe('getMeasurementUnitsForStandard', () => {
  it('should return international if the unit belongs to the international standard for the given type', () => {
    expect(getMeasurementUnitsStandard(Unit.meter, MeasurementType.length)).toBe(MeasurementStandard.international)
    expect(getMeasurementUnitsStandard(Unit.kilometer, MeasurementType.length)).toBe(MeasurementStandard.international)
  })

  it('should return imperial if the unit does not belong to the international standard for the given type', () => {
    expect(getMeasurementUnitsStandard(Unit.mile, MeasurementType.length)).toBe(MeasurementStandard.imperial)
  })

  it('should check all measurement types if no type is provided', () => {
    expect(getMeasurementUnitsStandard(Unit.meter)).toBe(MeasurementStandard.international)
    expect(getMeasurementUnitsStandard(Unit.kilogram)).toBe(MeasurementStandard.international)
    expect(getMeasurementUnitsStandard(Unit.mile)).toBe(MeasurementStandard.imperial)
  })

  it('should return imperial if the unit is not found in any international standard', () => {
    expect(getMeasurementUnitsStandard(Unit.mile)).toBe(MeasurementStandard.imperial)
    expect(getMeasurementUnitsStandard(Unit.cubicFeet)).toBe(MeasurementStandard.imperial)
  })
})

describe('getSortedMeasurementUnitsForType', () => {
  it('should return sorted international units for the given type', () => {
    const result = getSortedMeasurementUnitsForType(MeasurementType.time, MeasurementStandard.international)
    expect(result).toEqual(TimeUnitsList)
  })

  it('should return sorted imperial units for the given type', () => {
    const result = getSortedMeasurementUnitsForType(MeasurementType.time, MeasurementStandard.imperial)
    expect(result).toEqual(TimeUnitsList)
  })

  it('should return all units sorted for the given type if no standard is provided', () => {
    const result = getSortedMeasurementUnitsForType(MeasurementType.time)
    expect(result).toEqual(TimeUnitsList)
  })

  it('should throw invalidUnitConverter error if the type has no units defined', () => {
    const type = 'abcd' as MeasurementType
    expect(() => getSortedMeasurementUnitsForType(type)).toThrow(new GenericError('invalidUnitConverter'))
  })
})