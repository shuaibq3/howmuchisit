import Decimal from 'decimal.js'
import GenericError from '../../utils/errors/GenericError'
import { getIntegerAndDecimalSeparatedValue, getNumericValue, isInteger, isLargeNumber } from '../../utils/numberUtils'

describe('getNumberValue', () => {
  it('should return a number for a valid number string within safe integer range', () => {
    expect(getNumericValue('100')).toBe(100)
    expect(getNumericValue(String(Number.MAX_SAFE_INTEGER))).toBe(Number.MAX_SAFE_INTEGER)
  })

  it('should return a bigint for a valid number string outside safe integer range', () => {
    const largerThanMaxSafeInteger = getNumericValue(String(Number.MAX_SAFE_INTEGER + 1))
    const smallerThanMinSafeInteger = getNumericValue(String(Number.MIN_SAFE_INTEGER - 1))

    expect(Decimal(Number.MAX_SAFE_INTEGER + 1).toString()).toBe(largerThanMaxSafeInteger.toString())
    expect(Decimal(Number.MIN_SAFE_INTEGER - 1).toString()).toBe(smallerThanMinSafeInteger.toString())
  })

  it('should throw an error for an invalid number string', () => {
    expect(() => getNumericValue('abc')).toThrow(new GenericError('notInt'))
    expect(() => getNumericValue('123abc')).toThrow(new GenericError('notInt'))
  })
})

describe('isLargeNumber', () => {
  it('should return true for a large value', () => {
    expect(isLargeNumber(Decimal(100))).toBe(true)
    expect(isLargeNumber(Decimal(Number.MAX_SAFE_INTEGER + 1))).toBe(true)
  })

  it('should return false for a number value', () => {
    expect(isLargeNumber(100)).toBe(false)
    expect(isLargeNumber(Number.MAX_SAFE_INTEGER)).toBe(false)
  })
})

describe('isInteger', () => {
  it('should return true for an integer number', () => {
    expect(isInteger(100)).toBe(true)
    expect(isInteger(Decimal(100))).toBe(true)
  })

  it('should return false for a non-integer number', () => {
    expect(isInteger(100.5)).toBe(false)
    expect(isInteger(Decimal(100.5))).toBe(false)
  })

  it('should return true for a large integer value', () => {
    expect(isInteger(Decimal(Number.MAX_SAFE_INTEGER).add(1))).toBe(true)
  })

  it('should return false for a large non-integer value', () => {
    expect(isInteger(Decimal(Number.MAX_SAFE_INTEGER).add(1.5))).toBe(false)
  })
})

describe('getIntegerAndDecimalSeparatedValue', () => {
  it('should return integer and fractional parts as separate numeric values', () => {
    const result = getIntegerAndDecimalSeparatedValue(123.456)
    expect(result).toEqual([123, .456])
  })

  it('should return only integer part if there is no fractional part', () => {
    const result = getIntegerAndDecimalSeparatedValue(123)
    expect(result).toEqual([123, 0])
  })

  it('should return integer part as 0 if value is less than 1', () => {
    const result = getIntegerAndDecimalSeparatedValue(0.456)
    expect(result).toEqual([0, .456])
  })

  it('should handle negative values correctly', () => {
    const result = getIntegerAndDecimalSeparatedValue(-123.456)
    expect(result).toEqual([-123, .456])
  })

  it('should handle negative values without fractional part correctly', () => {
    const result = getIntegerAndDecimalSeparatedValue(-123)
    expect(result).toEqual([-123, 0])
  })
})