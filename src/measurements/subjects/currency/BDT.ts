import Unit from '../../units/units'
import Currency, { CurrencyCommon } from './currency'

export const BDT1000: Currency = {
  ...CurrencyCommon,
  note: '1000 Bangladeshi Taka',
  value: 1000,
  height: { unit: Unit.meter, value: 16e-2 },
  width: { unit: Unit.meter, value: 7e-2 },
  thickness: { unit: Unit.meter, value: .1e-3 },
  weight: { unit: Unit.kilogram, value: 1e-3 },
}

export const BDT500: Currency = {
  ...CurrencyCommon,
  note: '500 Bangladeshi Taka',
  value: 500,
  height: { unit: Unit.meter, value: 15e-2 },
  width: { unit: Unit.meter, value: 7e-2 },
  thickness: { unit: Unit.meter, value: .1e-3 },
  weight: { unit: Unit.kilogram, value: 1e-3 },
}