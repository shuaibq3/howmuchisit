import { MeasurementType, MeasurementStandard } from '../types'
import getConversionFactor from '../unitsConverter/conversions/getConversionFactor'
import ImperialUnits from './imperial'
import InternationalUnits from './international'
import { MeasurementUnit } from './units'

export default class SortedUnitUtils<T extends MeasurementType> {
  private readonly sortedTimeUnits: MeasurementUnit<T>[]
  
  constructor(measurementType: T, measurementStandard?: MeasurementStandard) {
    this.sortedTimeUnits = this.getSortedMeasurementUnitsForType(measurementType, measurementStandard)
  }

  private getSortedMeasurementUnitsForType(type: T, standard?: MeasurementStandard): MeasurementUnit<T>[] {
    const conversionFactors = getConversionFactor(type)
    const applicableUnits = (!standard || standard === MeasurementStandard.all) 
      ? conversionFactors.conversionFactors
      : conversionFactors.conversionFactors .filter(conversionFactor => standard === MeasurementStandard.international
        ? InternationalUnits[type].includes(conversionFactor.toUnit)
        : ImperialUnits[type].includes(conversionFactor.toUnit))
    return applicableUnits
      .sort((measurementA, measurementB) => 
        (measurementA.conversionFunctions.conversionToGranularUnit(1) as number) - (measurementB.conversionFunctions.conversionToGranularUnit(1) as number))
      .map(measurement => measurement.toUnit as MeasurementUnit<T>)
  }

  getSortedUnits() {
    return this.sortedTimeUnits
  }
  
  getNextUnit(currentUnit: MeasurementUnit<T>): MeasurementUnit<T> {
    const unitIndex = this.sortedTimeUnits.findIndex(unit => unit === currentUnit)
    if (unitIndex === -1 || !this.sortedTimeUnits[unitIndex + 1]) {
      return currentUnit
    }
    return this.sortedTimeUnits[unitIndex + 1]
  }
  
  getPreviousUnit(currentUnit: MeasurementUnit<T>): MeasurementUnit<T> {
    const unitIndex = this.sortedTimeUnits.findIndex(unit => unit === currentUnit)
    if (!this.sortedTimeUnits[unitIndex - 1]) {
      return currentUnit
    }
    return this.sortedTimeUnits[unitIndex - 1]
  }
}