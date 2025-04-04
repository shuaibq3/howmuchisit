import { MeasurementType } from '../types'

export enum Unit {
  millennium = 'millennium',
  century = 'century',
  decade = 'decade',
  year = 'y',
  month = 'month',
  week = 'week',
  day = 'day',
  hour = 'h',
  minute = 'min',
  second = 's',
  millisecond = 'ms',

  kelvin = 'K',
  degreesCelsius = '°C',
  degreesFahrenheit = '°F',
 
  tonne = 'ton',
  kilogram = 'kg',
  gram = 'gram',

  pound = 'pound',
  ounce = 'ounce',

  lightyear = 'lightyear',
  kilometer = 'km',
  meter = 'm',
  centimeter = 'cm',
  millimeter = 'mm',

  mile = 'mile',
  yard = 'yard',
  foot = 'ft',
  inch = 'in',

  squareMm = 'mm²',
  squareCm = 'cm²',
  squareMeter = 'm²',
  squareKm = 'km²',

  squareFeet = 'ft²',
  squareInch = 'in²',
  squareYard = 'yd²',
  squareMile = 'mi²',
  acre = 'acre',
  hectare = 'hectare',

  mmCube = 'mm³',
  cmCube = 'cm³',
  meterCube = 'm³',
  liter = 'liter',
  milliliter = 'ml',
  cc = 'cc',

  cubicFeet = 'ft³',
  pint = 'pint', 
  quart = 'quart', 
  gallon = 'gallon',
  barrel = 'barrel',
}

export type TimeUnits = Unit.millennium
  | Unit.century
  | Unit.decade 
  | Unit.year 
  | Unit.month 
  | Unit.week 
  | Unit.day
  | Unit.hour 
  | Unit.minute 
  | Unit.second 
  | Unit.millisecond

export const TimeUnitsList: TimeUnits[] = [
  Unit.millisecond, 
  Unit.second, 
  Unit.minute, 
  Unit.hour, 
  Unit.day, 
  Unit.week, 
  Unit.month, 
  Unit.year,
  Unit.decade,
  Unit.century,
  Unit.millennium
]

export type TemperatureUnits = Unit.kelvin
| Unit.degreesCelsius
| Unit.degreesFahrenheit

export type WeightUnits = Unit.tonne 
  | Unit.kilogram 
  | Unit.gram 
  | Unit.pound 
  | Unit.ounce

export type LengthUnits = Unit.lightyear
  | Unit.kilometer 
  | Unit.meter 
  | Unit.foot 
  | Unit.centimeter 
  | Unit.millimeter
  | Unit.mile
  | Unit.yard
  | Unit.foot
  | Unit.inch

export type AreaUnits = Unit.squareMm
  | Unit.squareCm
  | Unit.squareMeter
  | Unit.squareKm
  | Unit.squareFeet
  | Unit.squareInch
  | Unit.squareYard
  | Unit.squareMile
  | Unit.acre
  | Unit.hectare
  
export type VolumeUnits = Unit.mmCube
  | Unit.milliliter
  | Unit.cc
  | Unit.cmCube
  | Unit.meterCube
  | Unit.liter
  | Unit.cubicFeet
  | Unit.pint
  | Unit.quart
  | Unit.gallon
  | Unit.barrel

export type MeasurementUnit<T extends MeasurementType> = 
  T extends MeasurementType.time ? TimeUnits :
  T extends MeasurementType.temperature ? TemperatureUnits :
  T extends MeasurementType.weight ? WeightUnits :
  T extends MeasurementType.length ? LengthUnits :
  T extends MeasurementType.area ? AreaUnits :
  T extends MeasurementType.volume ? VolumeUnits :
  never

export default Unit