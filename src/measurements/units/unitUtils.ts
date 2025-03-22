import MeasurementType from '../config/types'
import Unit, { MeasurementStandard, MeasurementUnit } from './units'
import InternationalUnits from './international'
import getUnitConverter from '../unitsConverter/unitConverterFactory'
import ImperialUnits from './imperial'

export function getMeasurementUnitsStandard(unit: Unit, type?: MeasurementType): MeasurementStandard {
  const measurementTypes = type ? [type] : Object.values(MeasurementType)
  return measurementTypes.some(type => InternationalUnits[type].includes(unit)) 
    ? MeasurementStandard.international 
    : MeasurementStandard.imperial
}

export function getSortedMeasurementUnitsForType(type: MeasurementType, standard?: MeasurementStandard): MeasurementUnit<MeasurementType>[] {
  const unitConverter = getUnitConverter(type)
  
  const getMeasurementUnits = (): MeasurementUnit<MeasurementType>[] => {
    if (standard) {
      return standard === MeasurementStandard.international ? InternationalUnits[type] : ImperialUnits[type]
    }
    return Array.from(new Set([...InternationalUnits[type], ...ImperialUnits[type]]))
  }
  
  const measurementUnits = getMeasurementUnits()
  return measurementUnits.map(unit => unitConverter.getUnitConvertedValue({ value: 1, unit: measurementUnits[0] }, unit))
    .sort((measurementA, measurementB) => (measurementB.value as number) - (measurementA.value as number))
    .map(measurement => measurement.unit)
}