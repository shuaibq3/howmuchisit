import Decimal from 'decimal.js'
import { isLargeNumber, NumericValue } from './numberUtils'

export function add(...numbers: NumericValue[]): NumericValue {
  if (numbers.some(isLargeNumber)) {
    return numbers.reduce((acc: Decimal, number) => Decimal(number).plus(acc), Decimal(0))
  }
  return numbers.reduce((acc: number, number) => acc + (number as number), 0)
}

export function subtract(numberA: NumericValue, numberB: NumericValue): NumericValue {
  if (isLargeNumber(numberA) || isLargeNumber(numberB)) {
    return Decimal(numberA).minus(numberB)
  }
  return numberA - numberB
}

export function multiply(...numbers: NumericValue[]): NumericValue {
  if (numbers.some(isLargeNumber)) {
    return numbers.reduce((acc: Decimal, number) => Decimal(number).times(acc), Decimal(1))
  }
  return numbers.reduce((acc: number, number) => acc * (number as number), 1)
}

export function divide(...numbers: NumericValue[]): NumericValue {
  if (numbers.some(isLargeNumber)) {
    return numbers.reduce((acc: Decimal, number, index) => index !== 0 ? Decimal(acc).dividedBy(number) : acc, Decimal(numbers[0]))
  }
  return numbers.reduce((acc: number, number, index) => index !== 0 ? acc / (number as number) : acc, numbers[0] as number)
}

export function absoluteValue(number: NumericValue): NumericValue {
  if (isLargeNumber(number)) {
    return Decimal(number).absoluteValue()
  }
  return Math.abs(number as number)
}

export function isGreaterThan(numberA: NumericValue, numberB: NumericValue): boolean {
  if (isLargeNumber(numberA) || isLargeNumber(numberB)) {
    return Decimal(numberA).greaterThan(numberB)
  }
  return numberA > numberB
}

export function isEqual(numberA: NumericValue, numberB: NumericValue): boolean {
  if (isLargeNumber(numberA) || isLargeNumber(numberB)) {
    return Decimal(numberA).equals(numberB)
  }
  return numberA === numberB
}

export function toRoundNumber(number: NumericValue, precision = 3): NumericValue {
  if (isLargeNumber(number)) {
    return Decimal(number).toDecimalPlaces(precision)
  }
  return Number(number.toFixed(precision))
}