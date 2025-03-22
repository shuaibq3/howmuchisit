import GenericError from '../../utils/errors/GenericError'
import MeasurementType from '../config/types'
import TimeUnitConverter from './TimeConverter'
import UnitConverter from './UnitConverter'

export default function getUnitConverter(measurementType: MeasurementType): UnitConverter<typeof measurementType> {
  switch (measurementType) {
    case MeasurementType.time:
      return new TimeUnitConverter()
    default:
      throw new GenericError('invalidUnitConverter')
  }
}