import Decimal from 'decimal.js'
import { add, subtract, multiply, divide, isGreaterThan, absoluteValue, isEqual, toRoundNumber } from '../../utils/numericalOperations'

describe('numericalOperations', () => {
  describe('add', () => {
    it('should add numbers correctly', () => {
      expect(add(1, 2, 3)).toBe(6)
      expect(add(1.5, 2.5)).toBe(4)
    })

    it('should add Decimals correctly', () => {
      expect(add(Decimal(1), Decimal(2), Decimal(3)).toString()).toBe('6')
      expect(add(Decimal(Number.MAX_SAFE_INTEGER), Decimal(1)).toString()).toBe('9007199254740992')
    })

    it('should add mixed numbers and Decimals correctly', () => {
      expect(add(1, Decimal(2), 3).toString()).toBe('6')
    })
  })

  describe('subtract', () => {
    it('should subtract numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2)
      expect(subtract(5.5, 2.5)).toBe(3)
    })

    it('should subtract Decimals correctly', () => {
      expect(subtract(Decimal(5), Decimal(3)).toString()).toBe('2')
      expect(subtract(Decimal(Number.MAX_SAFE_INTEGER), Decimal(1)).toString()).toBe('9007199254740990')
    })

    it('should subtract mixed numbers and Decimals correctly', () => {
      expect(subtract(5, Decimal(3)).toString()).toBe('2')
    })
  })

  describe('multiply', () => {
    it('should multiply numbers correctly', () => {
      expect(multiply(2, 3, 4)).toBe(24)
      expect(multiply(1.5, 2)).toBe(3)
    })

    it('should multiply Decimals correctly', () => {
      expect(multiply(Decimal(2), Decimal(3), Decimal(4)).toString()).toBe('24')
      expect(multiply(Decimal(Number.MAX_SAFE_INTEGER), Decimal(2)).toString()).toBe('18014398509481982')
    })

    it('should multiply mixed numbers and Decimals correctly', () => {
      expect(multiply(2, Decimal(3), 4).toString()).toBe('24')
    })
  })

  describe('divide', () => {
    it('should divide numbers correctly', () => {
      expect(divide(6, 3, 10)).toBe(.2)
      expect(divide(7.5, 2.5, 10)).toBe(.3)
    })

    it('should divide Decimals correctly', () => {
      expect(divide(Decimal(6), Decimal(3), Decimal(10)).toString()).toBe('0.2')
      expect(divide(Decimal(Number.MAX_SAFE_INTEGER), Decimal(2), Decimal(10)).toString()).toBe('450359962737049.55')
    })

    it('should divide mixed numbers and Decimals correctly', () => {
      expect(divide(6, Decimal(3)).toString()).toBe('2')
    })
  })

  describe('isGreaterThan', () => {
    it('should compare numbers correctly', () => {
      expect(isGreaterThan(1, 2)).toBe(false)
      expect(isGreaterThan(2, 1)).toBe(true)
      expect(isGreaterThan(2, 2)).toBe(false)
    })

    it('should compare Decimals correctly', () => {
      expect(isGreaterThan(Decimal(1), Decimal(2))).toBe(false)
      expect(isGreaterThan(Decimal(2), Decimal(1))).toBe(true)
      expect(isGreaterThan(Decimal(2), Decimal(2))).toBe(false)
    })

    it('should compare mixed numbers and Decimals correctly', () => {
      expect(isGreaterThan(1, Decimal(2))).toBe(false)
      expect(isGreaterThan(Decimal(2), 1)).toBe(true)
      expect(isGreaterThan(2, Decimal(2))).toBe(false)
    })
  })

  describe('absoluteValue', () => {
    it('should return the absolute value of numbers correctly', () => {
      expect(absoluteValue(-5)).toBe(5)
      expect(absoluteValue(5)).toBe(5)
      expect(absoluteValue(-5.5)).toBe(5.5)
      expect(absoluteValue(5.5)).toBe(5.5)
    })

    it('should return the absolute value of Decimals correctly', () => {
      expect(absoluteValue(Decimal(-5)).toString()).toBe('5')
      expect(absoluteValue(Decimal(5)).toString()).toBe('5')
      expect(absoluteValue(Decimal(-5.5)).toString()).toBe('5.5')
      expect(absoluteValue(Decimal(5.5)).toString()).toBe('5.5')
    })

    it('should return the absolute value of mixed numbers and Decimals correctly', () => {
      expect(absoluteValue(Decimal(-5)).toString()).toBe('5')
      expect(absoluteValue(-5)).toBe(5)
    })
  })

  describe('isEqual', () => {
    it('should compare numbers correctly', () => {
      expect(isEqual(1, 2)).toBe(false)
      expect(isEqual(2, 2)).toBe(true)
      expect(isEqual(2, 1)).toBe(false)
    })

    it('should compare Decimals correctly', () => {
      expect(isEqual(Decimal(1), Decimal(2))).toBe(false)
      expect(isEqual(Decimal(2), Decimal(2))).toBe(true)
      expect(isEqual(Decimal(2), Decimal(1))).toBe(false)
    })

    it('should compare mixed numbers and Decimals correctly', () => {
      expect(isEqual(1, Decimal(2))).toBe(false)
      expect(isEqual(Decimal(2), 2)).toBe(true)
      expect(isEqual(2, Decimal(1))).toBe(false)
    })
  })

  describe('toRoundNumber', () => {
    it('should round numbers correctly', () => {
      expect(toRoundNumber(1.2345, 2)).toBe(1.23)
      expect(toRoundNumber(1.2355, 2)).toBe(1.24)
      expect(toRoundNumber(1.2345, 0)).toBe(1)
    })

    it('should round Decimals correctly', () => {
      expect(toRoundNumber(Decimal(1.2345), 2).toString()).toBe('1.23')
      expect(toRoundNumber(Decimal(1.2355), 2).toString()).toBe('1.24')
      expect(toRoundNumber(Decimal(1.2345), 0).toString()).toBe('1')
    })
  })

  // describe('isGreaterThanEquals', () => {
  //   it('should compare numbers correctly', () => {
  //     expect(isGreaterThanEquals(1, 2)).toBe(false)
  //     expect(isGreaterThanEquals(2, 1)).toBe(true)
  //     expect(isGreaterThanEquals(2, 2)).toBe(true)
  //   })

  //   it('should compare Decimals correctly', () => {
  //     expect(isGreaterThanEquals(Decimal(1), Decimal(2))).toBe(false)
  //     expect(isGreaterThanEquals(Decimal(2), Decimal(1))).toBe(true)
  //     expect(isGreaterThanEquals(Decimal(2), Decimal(2))).toBe(true)
  //   })

  //   it('should compare mixed numbers and Decimals correctly', () => {
  //     expect(isGreaterThanEquals(1, Decimal(2))).toBe(false)
  //     expect(isGreaterThanEquals(Decimal(2), 1)).toBe(true)
  //     expect(isGreaterThanEquals(2, Decimal(2))).toBe(true)
  //   })
  // })
})