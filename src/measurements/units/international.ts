import { MeasurementType } from '../types'
import Unit, { MeasurementUnit, TimeUnitsList } from './units'

const InternationalUnits: Record<MeasurementType, MeasurementUnit<MeasurementType>[]> = {
  [MeasurementType.time]: TimeUnitsList,
  [MeasurementType.weight]: [Unit.tonne, Unit.kilogram, Unit.gram],
  [MeasurementType.temperature]: [Unit.degreesCelsius, Unit.kelvin],
  [MeasurementType.length]: [Unit.millimeter, Unit.centimeter, Unit.meter, Unit.kilometer, Unit.lightyear],
  [MeasurementType.area]: [Unit.squareMm, Unit.squareCm, Unit.squareMeter, Unit.squareKm, Unit.hectare],
  [MeasurementType.volume]: [Unit.mmCube, Unit.cmCube, Unit.meterCube, Unit.liter],
}

export default InternationalUnits