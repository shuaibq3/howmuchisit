import { isNumber } from '../../utils/stringUtils'
import { convertToPlural } from '../../utils/stringUtils'
import Unit from '../../measurements/units/units'
import GenericError from '../../utils/errors/GenericError'
import Decimal from 'decimal.js'

describe('isNumber', () => {
  it('should return true for a string containing only digits', () => {
    expect(isNumber('12345')).toBe(true)
  })

  it('should return true for a string containing valid letters', () => {
    expect(isNumber('123e45')).toBe(true)
  })

  it('should return false for a string containing invalid letters', () => {
    expect(isNumber('123a45')).toBe(false)
    expect(isNumber('123e')).toBe(false)
    expect(isNumber('12345n')).toBe(false)
    expect(isNumber('123n45')).toBe(false)
  })

  it('should return false for a string containing special characters', () => {
    expect(isNumber('123@45')).toBe(false)
  })

  it('should return true for an empty string', () => {
    expect(isNumber('')).toBe(false)
  })

  it('should return false for a string containing spaces', () => {
    expect(isNumber('123 45')).toBe(false)
  })

  it('should return true for a string beyond MAX_SAFE_INTEGER', () => {
    expect(isNumber(Decimal(Number.MAX_SAFE_INTEGER).add(10).toString())).toBe(true)
  })

  it('should return true for a string below MIN_SAFE_INTEGER', () => {
    expect(isNumber(Decimal(Number.MIN_SAFE_INTEGER).sub(10).toString())).toBe(true)
  })
})

describe('convertToPlural', () => {
  it('should convert singular units to plural', () => {
    expect(convertToPlural(Unit.millisecond)).toBe('milliseconds')
    expect(convertToPlural(Unit.second)).toBe('seconds')
    expect(convertToPlural(Unit.minute)).toBe('minutes')
    expect(convertToPlural(Unit.hour)).toBe('hours')
    expect(convertToPlural(Unit.day)).toBe('days')
    expect(convertToPlural(Unit.week)).toBe('weeks')
    expect(convertToPlural(Unit.month)).toBe('months')
    expect(convertToPlural(Unit.year)).toBe('years')
    expect(convertToPlural(Unit.decade)).toBe('decades')
    expect(convertToPlural(Unit.century)).toBe('centuries')
    expect(convertToPlural(Unit.millennium)).toBe('millennia')
    expect(convertToPlural(Unit.millimeter)).toBe('millimeters')
    expect(convertToPlural(Unit.centimeter)).toBe('centimeters')
    expect(convertToPlural(Unit.meter)).toBe('meters')
    expect(convertToPlural(Unit.kilometer)).toBe('kilometers')
    expect(convertToPlural(Unit.mile)).toBe('miles')
    expect(convertToPlural(Unit.lightyear)).toBe('lightyears')
    expect(convertToPlural(Unit.gram)).toBe('grams')
    expect(convertToPlural(Unit.kilogram)).toBe('kilograms')
    expect(convertToPlural(Unit.tonne)).toBe('tons')
    expect(convertToPlural(Unit.meterCube)).toBe('meters cubed')
    expect(convertToPlural(Unit.cubicFeet)).toBe('cubic feet')
  })

  it('should return the same unit if it does not match any case', () => {
    expect(() => convertToPlural('unknownUnit' as Unit)).toThrow(new GenericError('invalidUnit'))
  })
})