import Decimal from 'decimal.js'
import GenericError from '../../utils/errors/GenericError'
import { getNumericValue, isLargeNumber } from '../../utils/numberUtils'

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