import GenericError from '../../utils/errors/GenericError'
import { getNumericValue } from '../../utils/numberUtils'

describe('getNumberValue', () => {
  it('should return a number for a valid number string within safe integer range', () => {
    expect(getNumericValue('100')).toBe(100)
    expect(getNumericValue(String(Number.MAX_SAFE_INTEGER))).toBe(Number.MAX_SAFE_INTEGER)
  })

  it('should return a bigint for a valid number string outside safe integer range', () => {
    const largerThanMaxSafeInteger = getNumericValue(String(Number.MAX_SAFE_INTEGER + 1))
    const smallerThanMinSafeInteger = getNumericValue(String(Number.MIN_SAFE_INTEGER - 1))

    expect(typeof largerThanMaxSafeInteger).toBe('bigint')
    expect(typeof smallerThanMinSafeInteger).toBe('bigint')
  })

  it('should throw an error for an invalid number string', () => {
    expect(() => getNumericValue('abc')).toThrow(new GenericError('notInt'))
    expect(() => getNumericValue('123abc')).toThrow(new GenericError('notInt'))
  })
})