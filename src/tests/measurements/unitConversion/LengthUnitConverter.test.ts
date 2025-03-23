import LengthUnitConverter from '../../../measurements/unitsConverter/LengthUnitConverter'
import Unit, { Measurement } from '../../../measurements/units/units'
import MeasurementType from '../../../measurements/config/types'
import Decimal from 'decimal.js'

describe('LengthUnitConverter', () => {
  const converter = new LengthUnitConverter()

  describe('convertToMillimeters', () => {
    it('should convert millimeters to millimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1000, unit: Unit.millimeter }
      const result = converter['convertToMillimeters'](input)
      expect(result).toBe(1000)
    })

    it('should convert centimeters to millimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.centimeter }
      const result = converter['convertToMillimeters'](input)
      expect(result).toBe(10)
    })

    it('should convert meters to millimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.meter }
      const result = converter['convertToMillimeters'](input)
      expect(result).toBe(1000)
    })

    it('should convert kilometers to millimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.kilometer }
      const result = converter['convertToMillimeters'](input)
      expect(result).toBe(1000000)
    })

    it('should convert inches to millimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.inch }
      const result = converter['convertToMillimeters'](input)
      expect(result).toBeCloseTo(25.4, 2)
    })

    it('should convert feet to millimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.foot }
      const result = converter['convertToMillimeters'](input)
      expect(result).toBeCloseTo(304.8, 2)
    })

    it('should convert yards to millimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.yard }
      const result = converter['convertToMillimeters'](input)
      expect(result).toBeCloseTo(914.4, 2)
    })

    it('should convert miles to millimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.mile }
      const result = converter['convertToMillimeters'](input)
      expect(result).toBe(1609344)
    })

    it('should convert lightyears to millimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.lightyear }
      const result = converter['convertToMillimeters'](input)
      expect(result).toBe(9.461e+18)
    })
  })

  describe('convertToCentimeters', () => {
    it('should convert millimeters to centimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 10, unit: Unit.millimeter }
      const result = converter['convertToCentimeters'](input)
      expect(result).toBe(1)
    })

    it('should convert centimeters to centimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.centimeter }
      const result = converter['convertToCentimeters'](input)
      expect(result).toBe(1)
    })

    it('should convert meters to centimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.meter }
      const result = converter['convertToCentimeters'](input)
      expect(result).toBe(100)
    })

    it('should convert kilometers to centimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.kilometer }
      const result = converter['convertToCentimeters'](input)
      expect(result).toBe(100000)
    })

    it('should convert inches to centimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.inch }
      const result = converter['convertToCentimeters'](input)
      expect(result).toBeCloseTo(2.54, 2)
    })

    it('should convert feet to centimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.foot }
      const result = converter['convertToCentimeters'](input)
      expect(result).toBeCloseTo(30.48, 2)
    })

    it('should convert yards to centimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.yard }
      const result = converter['convertToCentimeters'](input)
      expect(result).toBeCloseTo(91.44, 2)
    })

    it('should convert miles to centimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.mile }
      const result = converter['convertToCentimeters'](input)
      expect(result).toBe(160934.4)
    })

    it('should convert lightyears to centimeters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.lightyear }
      const result = converter['convertToCentimeters'](input)
      expect(result).toBe(9.461e+17)
    })
  })

  describe('convertToMeters', () => {
    it('should convert millimeters to meters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1000, unit: Unit.millimeter }
      const result = converter['convertToMeters'](input)
      expect(result).toBe(1)
    })

    it('should convert centimeters to meters', () => {
      const input: Measurement<MeasurementType.length> = { value: 100, unit: Unit.centimeter }
      const result = converter['convertToMeters'](input)
      expect(result).toBe(1)
    })

    it('should convert meters to meters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.meter }
      const result = converter['convertToMeters'](input)
      expect(result).toBe(1)
    })

    it('should convert kilometers to meters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.kilometer }
      const result = converter['convertToMeters'](input)
      expect(result).toBe(1000)
    })

    it('should convert inches to meters', () => {
      const input: Measurement<MeasurementType.length> = { value: 39.3701, unit: Unit.inch }
      const result = converter['convertToMeters'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert feet to meters', () => {
      const input: Measurement<MeasurementType.length> = { value: 3.28084, unit: Unit.foot }
      const result = converter['convertToMeters'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert yards to meters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1.09361, unit: Unit.yard }
      const result = converter['convertToMeters'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert miles to meters', () => {
      const input: Measurement<MeasurementType.length> = { value: 0.000621371, unit: Unit.mile }
      const result = converter['convertToMeters'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert lightyears to meters', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.lightyear }
      const result = converter['convertToMeters'](input)
      expect(result).toBe(9.461e+15)
    })
  })

  describe('convertToKilometers', () => {
    it('should convert millimeters to kilometers', () => {
      const input: Measurement<MeasurementType.length> = { value: 1000000, unit: Unit.millimeter }
      const result = converter['convertToKilometers'](input)
      expect(result).toBe(1)
    })

    it('should convert centimeters to kilometers', () => {
      const input: Measurement<MeasurementType.length> = { value: 100000, unit: Unit.centimeter }
      const result = converter['convertToKilometers'](input)
      expect(result).toBe(1)
    })

    it('should convert meters to kilometers', () => {
      const input: Measurement<MeasurementType.length> = { value: 1000, unit: Unit.meter }
      const result = converter['convertToKilometers'](input)
      expect(result).toBe(1)
    })

    it('should convert kilometers to kilometers', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.kilometer }
      const result = converter['convertToKilometers'](input)
      expect(result).toBe(1)
    })

    it('should convert inches to kilometers', () => {
      const input: Measurement<MeasurementType.length> = { value: 39370.1, unit: Unit.inch }
      const result = converter['convertToKilometers'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert feet to kilometers', () => {
      const input: Measurement<MeasurementType.length> = { value: 3280.84, unit: Unit.foot }
      const result = converter['convertToKilometers'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert yards to kilometers', () => {
      const input: Measurement<MeasurementType.length> = { value: 1093.61, unit: Unit.yard }
      const result = converter['convertToKilometers'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert miles to kilometers', () => {
      const input: Measurement<MeasurementType.length> = { value: 0.621371, unit: Unit.mile }
      const result = converter['convertToKilometers'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert lightyears to kilometers', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.lightyear }
      const result = converter['convertToKilometers'](input)
      expect(result).toBe(9.461e+12)
    })
  })

  describe('convertToInches', () => {
    it('should convert millimeters to inches', () => {
      const input: Measurement<MeasurementType.length> = { value: 25.4, unit: Unit.millimeter }
      const result = converter['convertToInches'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert centimeters to inches', () => {
      const input: Measurement<MeasurementType.length> = { value: 2.54, unit: Unit.centimeter }
      const result = converter['convertToInches'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert meters to inches', () => {
      const input: Measurement<MeasurementType.length> = { value: 0.0254, unit: Unit.meter }
      const result = converter['convertToInches'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert kilometers to inches', () => {
      const input: Measurement<MeasurementType.length> = { value: 0.0000254, unit: Unit.kilometer }
      const result = converter['convertToInches'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert inches to inches', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.inch }
      const result = converter['convertToInches'](input)
      expect(result).toBe(1)
    })

    it('should convert inches to feet', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.foot }
      const result = converter['convertToInches'](input)
      expect(result).toBeCloseTo(12, 2)
    })

    it('should convert inches to yards', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.yard }
      const result = converter['convertToInches'](input)
      expect(result).toBe(36)
    })

    it('should convert inches to miles', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.mile }
      const result = converter['convertToInches'](input)
      expect(result).toBe(63360)
    })
    
    it('should convert lightyears to inches', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.lightyear }
      const result = converter['convertToInches'](input)
      expect(result.toString()).toBe(Decimal('372480314960629950').toString())
    })
  })

  describe('convertToFeet', () => {
    it('should convert millimeters to feet', () => {
      const input: Measurement<MeasurementType.length> = { value: 304.8, unit: Unit.millimeter }
      const result = converter['convertToFeet'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert centimeters to feet', () => {
      const input: Measurement<MeasurementType.length> = { value: 30.48, unit: Unit.centimeter }
      const result = converter['convertToFeet'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert meters to feet', () => {
      const input: Measurement<MeasurementType.length> = { value: 0.3048, unit: Unit.meter }
      const result = converter['convertToFeet'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert kilometers to feet', () => {
      const input: Measurement<MeasurementType.length> = { value: 0.0003048, unit: Unit.kilometer }
      const result = converter['convertToFeet'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert inches to feet', () => {
      const input: Measurement<MeasurementType.length> = { value: 12, unit: Unit.inch }
      const result = converter['convertToFeet'](input)
      expect(result).toBeCloseTo(1, 3)
    })

    it('should convert feet to feet', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.foot }
      const result = converter['convertToFeet'](input)
      expect(result).toBeCloseTo(1, 3)
    })

    it('should convert yards to feet', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.yard }
      const result = converter['convertToFeet'](input)
      expect(result).toBeCloseTo(3, 3)
    })

    it('should convert miles to feet', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.mile }
      const result = converter['convertToFeet'](input)
      expect(result).toBe(5280)
    })

    it('should convert lightyears to feet', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.lightyear }
      const result = converter['convertToFeet'](input)
      expect(result.toString()).toBe(Decimal('31040026246719164').toString())
    })
  })

  describe('convertToYards', () => {
    it('should convert millimeters to yards', () => {
      const input: Measurement<MeasurementType.length> = { value: 914.4, unit: Unit.millimeter }
      const result = converter['convertToYards'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert centimeters to yards', () => {
      const input: Measurement<MeasurementType.length> = { value: 91.44, unit: Unit.centimeter }
      const result = converter['convertToYards'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert meters to yards', () => {
      const input: Measurement<MeasurementType.length> = { value: 0.9144, unit: Unit.meter }
      const result = converter['convertToYards'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert kilometers to yards', () => {
      const input: Measurement<MeasurementType.length> = { value: 0.0009144, unit: Unit.kilometer }
      const result = converter['convertToYards'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert inches to yards', () => {
      const input: Measurement<MeasurementType.length> = { value: 36, unit: Unit.inch }
      const result = converter['convertToYards'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert feet to yards', () => {
      const input: Measurement<MeasurementType.length> = { value: 3, unit: Unit.foot }
      const result = converter['convertToYards'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert yards to yards', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.yard }
      const result = converter['convertToYards'](input)
      expect(result).toBe(1)
    })

    it('should convert miles to yards', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.mile }
      const result = converter['convertToYards'](input)
      expect(result).toBe(1760)
    })

    it('should convert lightyears to yards', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.lightyear }
      const result = converter['convertToYards'](input)
      expect(result.toString()).toBe(Decimal('10346675415573054').toString())
    })
  })

  describe('convertToMiles', () => {
    it('should convert millimeters to miles', () => {
      const input: Measurement<MeasurementType.length> = { value: 1609344, unit: Unit.millimeter }
      const result = converter['convertToMiles'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert centimeters to miles', () => {
      const input: Measurement<MeasurementType.length> = { value: 160934.4, unit: Unit.centimeter }
      const result = converter['convertToMiles'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert meters to miles', () => {
      const input: Measurement<MeasurementType.length> = { value: 1609.344, unit: Unit.meter }
      const result = converter['convertToMiles'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert kilometers to miles', () => {
      const input: Measurement<MeasurementType.length> = { value: 1.609344, unit: Unit.kilometer }
      const result = converter['convertToMiles'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert inches to miles', () => {
      const input: Measurement<MeasurementType.length> = { value: 63360, unit: Unit.inch }
      const result = converter['convertToMiles'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert feet to miles', () => {
      const input: Measurement<MeasurementType.length> = { value: 5280, unit: Unit.foot }
      const result = converter['convertToMiles'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert yards to miles', () => {
      const input: Measurement<MeasurementType.length> = { value: 1760, unit: Unit.yard }
      const result = converter['convertToMiles'](input)
      expect(result).toBeCloseTo(1, 2)
    })

    it('should convert miles to miles', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.mile }
      const result = converter['convertToMiles'](input)
      expect(result).toBe(1)
    })

    it('should convert lightyears to miles', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.lightyear }
      const result = converter['convertToMiles'](input)
      expect(result.toString()).toBe(Decimal('5878792849757.417').toString())
    })
  })
})