import CustomError from '../../utils/errors/CustomError'
import { Unit } from './units'

export function getUnitShortForm(unit: Unit): string {
  switch (unit) {
    case Unit.millisecond:
      return 'ms'
    case Unit.second:
      return 's'
    case Unit.minute:
      return 'min'
    case Unit.hour:
      return 'h'
    case Unit.tonne:
      return 'ton'
    case Unit.kilogram:
      return 'kg'
    case Unit.gram:
      return 'g'
    case Unit.kilometer:
      return 'km'
    case Unit.meter:
      return 'm'
    case Unit.centimeter:
      return 'cm'
    case Unit.millimeter:
      return 'mm'
    case Unit.foot:
      return 'ft'
    case Unit.inch:
      return 'in'
    case Unit.milliliter:
      return 'ml'
    default:
      return unit
  }
}

export function convertToPlural(unit: Unit) {
  switch (unit) {
    case Unit.century:
      return 'centuries'
    case Unit.millennium:
      return 'millennia'
    case Unit.tonne:
      return 'tons'
    case Unit.foot:
      return 'feet'
    case Unit.inch:
      return 'inches'
    case Unit.kelvin:
    case Unit.degreesCelsius:
    case Unit.degreesFahrenheit:
    case Unit.squareCm:
    case Unit.squareFeet:
    case Unit.squareInch:
    case Unit.squareKm:
    case Unit.squareMeter:
    case Unit.squareMile:
    case Unit.squareMm:
    case Unit.squareYard:
    case Unit.mmCube:
    case Unit.cmCube:
    case Unit.meterCube:
    case Unit.cc:
    case Unit.cubicFeet:
      return unit
    default: {
      return `${unit}s`
    }
  }
}

export function convertToAreaOrVolume(...paramUnits: Unit[]): Unit {
  if (paramUnits.every(unit => paramUnits[0] !== unit)) {
    throw new CustomError('conversionErrorForDifferentMeasurementTypes')
  }

  if (paramUnits.length === 1) {
    return paramUnits[0]
  }

  if (paramUnits.length == 2) {
    switch (paramUnits[0]) {
      case Unit.millimeter:
        return Unit.squareMm
      case Unit.centimeter:
        return Unit.squareCm
      case Unit.meter:
        return Unit.squareMeter
      case Unit.kilometer:
        return Unit.squareKm
      case Unit.foot:
        return Unit.squareFeet
      case Unit.inch:
        return Unit.squareInch
      case Unit.mile:
        return Unit.squareMile
      case Unit.acre:
      case Unit.hectare:
        return paramUnits[0]
    }
  }

  if (paramUnits.length == 3) {
    switch (paramUnits[0]) {
      case Unit.millimeter:
        return Unit.mmCube
      case Unit.centimeter:
        return Unit.cmCube
      case Unit.meter:
        return Unit.meterCube
      case Unit.foot:
        return Unit.cubicFeet
      case Unit.liter:
      case Unit.milliliter:
      case Unit.cc:
      case Unit.pint:
      case Unit.quart:
      case Unit.gallon:
      case Unit.barrel:
        return paramUnits[0]
    }
  }

  return paramUnits[0]
}
