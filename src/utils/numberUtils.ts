import Decimal from 'decimal.js'
import GenericError from './errors/GenericError'
import { isNumber } from './stringUtils'

export type NumericValue = number | Decimal

export function isLargeNumber(value: NumericValue): value is Decimal {
  return !(typeof value === 'number')
}

export function getNumericValue(numString: string): NumericValue {
  if (!isNumber(numString)) {
    throw new GenericError('notInt')
  }
  const bigNumber = Decimal(numString)
  return bigNumber.greaterThan(Number.MAX_SAFE_INTEGER) || bigNumber.lessThan(Number.MIN_SAFE_INTEGER) ? bigNumber : Number(numString)
}
