import { MeasurementType } from '../types'
import Unit, { MeasurementUnit, TimeUnitsList } from './units'

const ImperialUnits: Record<MeasurementType, MeasurementUnit<MeasurementType>[]> = {
  [MeasurementType.time]: TimeUnitsList,
  [MeasurementType.weight]: [Unit.pound, Unit.ounce],
  [MeasurementType.temperature]: [Unit.degreesFahrenheit],
  [MeasurementType.length]: [Unit.mile, Unit.yard, Unit.foot, Unit.inch],
  [MeasurementType.area]: [Unit.squareMile, Unit.squareYard, Unit.squareFeet, Unit.squareInch, Unit.acre],
  [MeasurementType.volume]: [Unit.cubicFeet, Unit.pint, Unit.quart, Unit.gallon, Unit.barrel],
}

export default ImperialUnits