import GenericError from '../../../utils/errors/GenericError'
import MeasurementType from '../../config/types'
import ConversionFactor from './conversionFactor'
import LengthConversionFactors from './lengthConversionFactors'
import TimeConversionFactors from './timeConversionFactors'

function getRelevantConversionFactor(measurementType: MeasurementType) {
  switch (measurementType) {
    case MeasurementType.time:
      return TimeConversionFactors
    case MeasurementType.length:
      return LengthConversionFactors
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