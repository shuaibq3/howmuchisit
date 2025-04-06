import Unit from '../../units/units'
import Currency, { CurrencyCommon } from './currency'

export const BDT1000: Currency = {
  ...CurrencyCommon,
  note: '1000 Bangladeshi Taka',
  value: 1000,
  length: { unit: Unit.centimeter, value: 16 },
  width: { unit: Unit.centimeter, value: 7 },
  thickness: { unit: Unit.centimeter, value: 0.01 },
  weight: { unit: Unit.gram, value: 1 },
}

export const BDT500: Currency = {
  ...CurrencyCommon,
  note: '500 Bangladeshi Taka',
  value: 500,
  length: { unit: Unit.centimeter, value: 15 },
  width: { unit: Unit.centimeter, value: 7 },
  thickness: { unit: Unit.centimeter, value: 0.01 },
  weight: { unit: Unit.gram, value: 1 },
}