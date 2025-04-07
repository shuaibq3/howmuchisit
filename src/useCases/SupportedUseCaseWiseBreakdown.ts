import { MeasurementStandard, MeasurementType } from '../measurements/types'
import { Measurement } from '../measurements/types'
import BreakdownToAppropriateUnits from '../measurements/unitsBreakdown/BreakdownToAppropriateUnits'
import UniversalUnitConverter from '../measurements/unitsConverter/UniversalUnitConverter'
import SubjectMeasurementBreakdown from './SubjectMeasurementBreakdown'
import getConversionFactor from '../measurements/unitsConverter/conversions/getConversionFactor'
import { isGreaterThan, multiply } from '../utils/numericalOperations'
import { convertToPlural } from '../measurements/units/unitUtils'
import { NumericValue } from '../utils/numberUtils'
import Unit, { MeasurementUnit } from '../measurements/units/units'
import CustomError from '../utils/errors/CustomError'

export default class SupportedUseCaseWiseBreakdown<T extends MeasurementType[]> implements SubjectMeasurementBreakdown<T> {
  private convertToAreaOrVolume(...paramUnits: MeasurementUnit<T[number]>[]): MeasurementUnit<MeasurementType> {
    if (paramUnits.every(unit => paramUnits[0] !== unit)) {
      throw new CustomError('conversionErrorForDifferentMeasurementTypes')
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
      }
    }
  
    return paramUnits[0]
  }

  private getMeasurementForUseCase(inputValue: NumericValue, ...measurements: Measurement<T[number]>[]): Measurement<MeasurementType> {
    const { multipliedValue, measurementUnits } = measurements
      .reduce((acc: { multipliedValue: NumericValue, measurementUnits: MeasurementUnit<T[number]>[] }, current) => ({ 
        multipliedValue: multiply(acc.multipliedValue, current.value), 
        measurementUnits: [...acc.measurementUnits, current.unit] 
      }), { multipliedValue: inputValue, measurementUnits: [] })
    return { value: multipliedValue, unit: this.convertToAreaOrVolume(...measurementUnits) }
  }

  // useCaseWiseMeasurements contains all the measurementTypes defined in measurementContext.supportedUseCases. enforced through ts compiler
  getUseCaseWiseMeasurementBreakdown(
    inputValue: NumericValue, 
    useCaseWiseMeasurements: Record<T[number], Measurement<T[number]>[]>, 
    supportedUnitStandard?: MeasurementStandard,
  ): Record<T[number], Measurement<T[number]>[]> {
    return (Object.keys(useCaseWiseMeasurements) as T).reduce((useCaseWiseMeasurementBreakdown, measurementType) => {
      const unitsBreakdown = new BreakdownToAppropriateUnits(measurementType, supportedUnitStandard)
      const unitConverter = new UniversalUnitConverter(getConversionFactor(measurementType))
      
      const measurements = useCaseWiseMeasurements[measurementType as keyof typeof useCaseWiseMeasurements]
      const useCaseWiseAdjustedMeasurements = this.getMeasurementForUseCase(inputValue, ...measurements)
      return { 
        ...useCaseWiseMeasurementBreakdown, 
        [measurementType]: unitsBreakdown.getUnitsBreakdown(useCaseWiseAdjustedMeasurements, unitConverter)
      }
    }, {} as Record<T[number], Measurement<T[number]>[]>)
  }

  getUseCaseWiseBreakdownAsString(useCaseWiseBrokenDownMeasurements: Record<T[number], Measurement<T[number]>[]>): Record<T[number], string> {
    return Object.keys(useCaseWiseBrokenDownMeasurements).reduce((acc, measurementType) => {
      const measurement = useCaseWiseBrokenDownMeasurements[measurementType as keyof typeof useCaseWiseBrokenDownMeasurements]
      return { 
        ...acc, 
        [measurementType]: measurement .map(
          breakdown => `${breakdown.value} ${isGreaterThan(breakdown.value, 1) ? convertToPlural(breakdown.unit) : breakdown.unit}`
        ).join(', ') }
    }, {} as Record<T[number], string>)
  }
}