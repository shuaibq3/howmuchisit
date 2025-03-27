import GenericError from '../../../utils/errors/GenericError'
import MeasurementType from '../../config/types'
import AreaConversionFactors from './areaConversionFactors'
import ConversionFactor from './conversionFactor'
import LengthConversionFactors from './lengthConversionFactors'
import TemperatureConversionFactors from './temperatureConversionFactors'
import TimeConversionFactors from './timeConversionFactors'
import VolumeConversionFactors from './volumeConversionFactors'
import WeightConversionFactors from './weightConversionFactors'

function getRelevantConversionFactor(measurementType: MeasurementType) {
  switch (measurementType) {
    case MeasurementType.time:
      return TimeConversionFactors
    case MeasurementType.length:
      return LengthConversionFactors
    case MeasurementType.temperature:
      return TemperatureConversionFactors
    case MeasurementType.volume:
      return VolumeConversionFactors
    case MeasurementType.area:
      return AreaConversionFactors
    case MeasurementType.weight:
      return WeightConversionFactors
    default:
      throw new GenericError('conversionFactorNotDefined', undefined, [measurementType])
  }
}

export default function getConversionFactor(measurementType: MeasurementType): ConversionFactor<MeasurementType> {
  const conversionFactor = getRelevantConversionFactor(measurementType)
  if (Object.keys(conversionFactor).length === 0) {
    throw new GenericError('conversionFactorNotDefined', undefined, ['Must contain at least one unit definition'])
  }
  return conversionFactor
}