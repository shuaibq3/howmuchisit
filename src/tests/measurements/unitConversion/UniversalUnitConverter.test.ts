import UniversalUnitConverter from '../../../measurements/unitsConverter/UniversalUnitConverter'
import Unit, { Measurement, MeasurementStandard, MeasurementUnit, TimeUnits } from '../../../measurements/units/units'
import MeasurementType from '../../../measurements/config/types'
import TimeConversionFactors from '../../../measurements/unitsConverter/conversionStrategy/timeConversionFactors'
import GenericError from '../../../utils/errors/GenericError'
import LengthConversionFactors from '../../../measurements/unitsConverter/conversionStrategy/lengthConversionFactors'

describe('UniversalUnitConverter', () => {
  describe('Common conversion tests', () => {
    const conversionFactor = {
      measurementType: MeasurementType.time,
      conversionFactors: TimeConversionFactors.conversionFactors,
    }
    const converter = new UniversalUnitConverter(conversionFactor)

    it('should throw error if input measurement if no conversion factor matches the units', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.kilogram as TimeUnits }
      const targetUnit: MeasurementUnit<MeasurementType.time> = Unit.minute
      try {
        converter.getUnitConvertedValue(input, targetUnit)
        expect(true).toBe(false)
      } catch (error) {
        expect(error).toBeInstanceOf(GenericError)
      }
    })
  })

  describe('Time conversion', () => {
    const conversionFactor = {
      measurementType: MeasurementType.time,
      conversionFactors: TimeConversionFactors.conversionFactors,
    }
    const converter = new UniversalUnitConverter(conversionFactor)
  
    it('should convert a value from one unit to another', () => {
      const input: Measurement<MeasurementType.time> = { value: 3600, unit: Unit.second }
      const targetUnit: MeasurementUnit<MeasurementType.time> = Unit.hour
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 1, unit: targetUnit })
    })
  
    it('should convert a value from one unit to another even if conversionFactor reference unit is not the smallest unit ', () => {
      const conversionFactor = {
        measurementType: MeasurementType.time,
        conversionFactors: [
          ...TimeConversionFactors.conversionFactors.filter(conversion => conversion.toUnit !== Unit.millisecond 
          && conversion.toUnit !== Unit.second
          && conversion.toUnit !== Unit.minute
          && conversion.toUnit !== Unit.hour
          && conversion.toUnit !== Unit.day),
          { toUnit: Unit.millisecond, multiplicationFactor: 1 / 60 / 60 / 1000 },
          { toUnit: Unit.second, multiplicationFactor: 1 / 60 / 60 },
          { toUnit: Unit.minute, multiplicationFactor: 1 / 60 },
          { toUnit: Unit.hour, multiplicationFactor: 1 },
          { toUnit: Unit.day, multiplicationFactor: 24 },
        ]
      }
      const converter = new UniversalUnitConverter(conversionFactor)
  
      const input: Measurement<MeasurementType.time> = { value: 3600 * 6, unit: Unit.second }
      const targetUnit: MeasurementUnit<MeasurementType.time> = Unit.day
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 0.25, unit: targetUnit })
    })
  
    it('should return the same value if the source and target units are the same', () => {
      const input: Measurement<MeasurementType.time> = { value: 60, unit: Unit.minute }
      const targetUnit: MeasurementUnit<MeasurementType.time> = Unit.minute
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual(input)
    })
  
    it('should convert a value from a larger unit to a smaller unit', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.day }
      const targetUnit: MeasurementUnit<MeasurementType.time> = Unit.hour
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 24, unit: Unit.hour })
    })
  
    it('should handle multiple conversion steps correctly', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.day }
      const targetUnit: MeasurementUnit<MeasurementType.time> = Unit.minute
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 1440, unit: targetUnit })
    })
  })

  describe('Length conversion', () => {
    const conversionFactor = {
      measurementType: MeasurementType.length,
      conversionFactors: LengthConversionFactors.conversionFactors,
    }
    const converter = new UniversalUnitConverter(conversionFactor, MeasurementStandard.international)

    it('should convert a value from one unit to another', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.centimeter }
      const targetUnit: MeasurementUnit<MeasurementType.length> = Unit.millimeter

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 10, unit: targetUnit })
    })

    it('should convert a value from one unit to another even if conversionFactor reference unit is not the smallest unit ', () => {
      const conversionFactor = {
        measurementType: MeasurementType.length,
        conversionFactors: [
          ...LengthConversionFactors.conversionFactors.filter(conversion => conversion.toUnit !== Unit.millimeter 
        && conversion.toUnit !== Unit.centimeter
        && conversion.toUnit !== Unit.meter
        && conversion.toUnit !== Unit.kilometer),
          { toUnit: Unit.millimeter, multiplicationFactor: 1 / 100 / 10 },
          { toUnit: Unit.centimeter, multiplicationFactor: 1 / 100 },
          { toUnit: Unit.meter, multiplicationFactor: 1 },
          { toUnit: Unit.kilometer, multiplicationFactor: 1000 },
        ]
      }
      const converter = new UniversalUnitConverter(conversionFactor)

      const input: Measurement<MeasurementType.length> = { value: 100 * 1000, unit: Unit.centimeter }
      const targetUnit: MeasurementUnit<MeasurementType.length> = Unit.kilometer

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 1, unit: targetUnit })
    })

    it('should return the same value if the source and target units are the same', () => {
      const input: Measurement<MeasurementType.length> = { value: 60, unit: Unit.meter }
      const targetUnit: MeasurementUnit<MeasurementType.length> = Unit.meter

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual(input)
    })

    it('should convert a value from a larger unit to a smaller unit', () => {
      const input: Measurement<MeasurementType.length> = { value: 10, unit: Unit.kilometer }
      const targetUnit: MeasurementUnit<MeasurementType.length> = Unit.meter

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 10 * 1000, unit: Unit.meter })
    })

    it('should handle multiple conversion steps correctly', () => {
      const input: Measurement<MeasurementType.length> = { value: 1, unit: Unit.meter }
      const targetUnit: MeasurementUnit<MeasurementType.length> = Unit.millimeter

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 1000, unit: targetUnit })
    })
  })
})
