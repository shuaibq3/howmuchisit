import GenericError from '../../utils/errors/GenericError'
import MeasurementType from '../config/types'
import LengthUnitConverter from './LengthUnitConverter'
import TimeUnitConverter from './TimeConverter'
import UnitConverter from './UnitConverter'

export default function getUnitConverter<T extends MeasurementType>(measurementType: T): UnitConverter<T> {
  switch (measurementType) {
    case MeasurementType.time:
      return new TimeUnitConverter() as unknown as UnitConverter<T>
    case MeasurementType.length:
      return new LengthUnitConverter() as unknown as UnitConverter<T>
    default:
      throw new GenericError('invalidUnitConverter')
  }
}