import { isMaxSafeInteger, isMinSafeInteger } from '../../utils/numberUtils'

describe('isMaxSafeInteger', () => {
  it('should return true for a number less than or equal to MAX_SAFE_INTEGER', () => {
    expect(isMaxSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true)
    expect(isMaxSafeInteger(100)).toBe(true)
  })

  it('should return false for a number greater than MAX_SAFE_INTEGER', () => {
    expect(isMaxSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false)
  })
})

describe('isMinSafeInteger', () => {
  it('should return true for a number greater than or equal to MIN_SAFE_INTEGER', () => {
    expect(isMinSafeInteger(Number.MIN_SAFE_INTEGER)).toBe(true)
    expect(isMinSafeInteger(-100)).toBe(true)
  })

  it('should return false for a number less than MIN_SAFE_INTEGER', () => {
    expect(isMinSafeInteger(Number.MIN_SAFE_INTEGER - 1)).toBe(false)
  })
})