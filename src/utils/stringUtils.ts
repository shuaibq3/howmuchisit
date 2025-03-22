import Unit from '../measurements/units/units'
import GenericError from './errors/GenericError'

export function isNumber(value: string) {
  if (!value) {
    return false
  }
  return !isNaN(Number(value))
}

export function convertToPlural(unit: Unit) {
  switch (unit) {
    case Unit.millisecond:
      return 'milliseconds'
    case Unit.second:
      return 'seconds'
    case Unit.minute:
      return 'minutes'
    case Unit.hour:
      return 'hours'
    case Unit.day:
      return 'days'
    case Unit.week:
      return 'weeks'
    case Unit.month:
      return 'months'
    case Unit.year:
      return 'years'
    case Unit.decade:
      return 'decades'
    case Unit.century:
      return 'centuries'
    case Unit.millennium:
      return 'millennia'
    case Unit.millimeter:
      return 'millimeters'
    case Unit.centimeter:
      return 'centimeters'
    case Unit.meter:
      return 'meters'
    case Unit.kilometer:
      return 'kilometers'
    case Unit.mile:
      return 'miles'
    case Unit.lightyear:
      return 'lightyears'
    case Unit.gram:
      return 'grams'
    case Unit.kilogram:
      return 'kilograms'
    case Unit.tonne:
      return 'tons'
    case Unit.meterCube:
      return 'meters cubed'
    case Unit.cubicFeet:
      return 'cubic feet'
    default:
      throw new GenericError('invalidUnit')
  }
}