import CustomError from '../../utils/errors/CustomError'
import MeasurementType from '../config/types'
import { Measurement, MeasurementStandard, MeasurementUnit } from '../units/units'
import ConversionFactor from './conversions/conversionFactor'
import UnitConverter from './UnitConverter'

export default class UniversalUnitConverter<T extends MeasurementType> implements UnitConverter<T> {
  constructor(private readonly conversionFactor: ConversionFactor<T>, private readonly measurementStandard?: MeasurementStandard) {}

  getConversionFactor(): ConversionFactor<T>['conversionFactors'] {
    return this.conversionFactor.conversionFactors
  }

  getMeasurementType(): T {
    return this.conversionFactor.measurementType
  }

  getUnitConvertedValue(conversionMeasurement: Measurement<T>, convertUnit: MeasurementUnit<T>): Measurement<T> {
    const conversionUnitMeasurementFactor = this.getConversionFactor().find(unitConversionFactor => unitConversionFactor.toUnit === conversionMeasurement.unit)
    const convertToUnitMeasurementFactor = this.getConversionFactor().find(unitConversionFactor => unitConversionFactor.toUnit === convertUnit)
    if (!conversionUnitMeasurementFactor || !convertToUnitMeasurementFactor) {
      throw new CustomError('conversionFactorNotDefined', undefined, [conversionMeasurement.unit, ',' ,'or', convertUnit])
    }
    const convertedToSingleUnit = conversionUnitMeasurementFactor.conversionFunctions.conversionToGranularUnit(conversionMeasurement.value)
    return { value: convertToUnitMeasurementFactor.conversionFunctions.convertFromGranularUnit(convertedToSingleUnit), unit: convertUnit }
  }
}