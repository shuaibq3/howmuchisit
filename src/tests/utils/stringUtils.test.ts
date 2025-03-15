import { isNumber } from '../../utils/stringUtils'

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
    expect(isNumber('')).toBe(true)
  })

  it('should return false for a string containing spaces', () => {
    expect(isNumber('123 45')).toBe(false)
  })
})