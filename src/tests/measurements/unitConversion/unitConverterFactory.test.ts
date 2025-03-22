import getUnitConverter from '../../../measurements/unitsConverter/unitConverterFactory'
import MeasurementType from '../../../measurements/config/types'
import TimeUnitConverter from '../../../measurements/unitsConverter/TimeConverter'
import GenericError from '../../../utils/errors/GenericError'

describe('unitConverterFactory', () => {
  it('should return a TimeUnitConverter instance when measurementType is time', () => {
    const converter = getUnitConverter(MeasurementType.time)
    expect(converter).toBeInstanceOf(TimeUnitConverter)
  })

  it('should throw a GenericError when an invalid measurementType is provided', () => {
    expect(() => getUnitConverter('abcd' as MeasurementType)).toThrow(GenericError)
  })
})