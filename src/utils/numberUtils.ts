import Decimal from 'decimal.js'
import GenericError from './errors/GenericError'
import { isNumber } from './stringUtils'
import { toRoundNumber } from './numericalOperations'

export type NumericValue = number | Decimal

export function isLargeNumber(value: NumericValue): value is Decimal {
  return !(typeof value === 'number')
}

export function isInteger(value: NumericValue): boolean {
  return value.toString().indexOf('.') === -1
}

export function getNumericValue(numString: string): NumericValue {
  if (!isNumber(numString)) {
    throw new GenericError('notInt')
  }
  const bigNumber = Decimal(numString)
  return bigNumber.greaterThan(Number.MAX_SAFE_INTEGER) || bigNumber.lessThan(Number.MIN_SAFE_INTEGER) ? bigNumber : Number(numString)
}

export function getIntegerAndDecimalSeparatedValue(value: NumericValue): NumericValue[] {
  const intValue = String(value).split('.')
  return [getNumericValue(intValue[0]), toRoundNumber(getNumericValue(`0.${intValue[1] || 0}`))]
}
