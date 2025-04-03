import UniversalUnitConverter from '../../../measurements/unitsConverter/UniversalUnitConverter'
import Unit, { Measurement, MeasurementStandard, MeasurementUnit, TimeUnits } from '../../../measurements/units/units'
import MeasurementType from '../../../measurements/config/types'
import TimeConversionFactors from '../../../measurements/unitsConverter/conversions/timeConversionFactors'
import CustomError from '../../../utils/errors/CustomError'
import LengthConversionFactors from '../../../measurements/unitsConverter/conversions/lengthConversionFactors'
import WeightConversionFactors from '../../../measurements/unitsConverter/conversions/weightConversionFactors'
import AreaConversionFactors from '../../../measurements/unitsConverter/conversions/areaConversionFactors'
import VolumeConversionFactors from '../../../measurements/unitsConverter/conversions/volumeConversionFactors'
import TemperatureConversionFactors from '../../../measurements/unitsConverter/conversions/temperatureConversionFactors'
import MultiplicationFactorConversionStrategy from '../../../measurements/unitsConverter/conversions/conversionStrategies/MultiplicationFactorConversionStrategy'

describe('UniversalUnitConverter', () => {
  describe('Common conversion tests', () => {
    const converter = new UniversalUnitConverter(TimeConversionFactors)

    it('should throw error if input measurement if no conversion factor matches the units', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.kilogram as TimeUnits }
      const targetUnit: MeasurementUnit<MeasurementType.time> = Unit.minute
      try {
        converter.getUnitConvertedValue(input, targetUnit)
        expect(true).toBe(false)
      } catch (error) {
        expect(error).toBeInstanceOf(CustomError)
      }
    })

    it('should return the same value if the source and target units are the same', () => {
      const input: Measurement<MeasurementType.time> = { value: 60, unit: Unit.hour }
      const targetUnit: MeasurementUnit<MeasurementType.time> = Unit.hour

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual(input)
    })
  })

  describe('Time conversion', () => {
    const converter = new UniversalUnitConverter(TimeConversionFactors)
  
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
          ...TimeConversionFactors.conversionFactors.filter(conversion => conversion.toUnit !== Unit.second && conversion.toUnit !== Unit.day),
          { toUnit: Unit.second, conversionFunctions: new MultiplicationFactorConversionStrategy(1 / 60 / 60) },
          { toUnit: Unit.day, conversionFunctions: new MultiplicationFactorConversionStrategy(24) },
        ]
      }
      const converter = new UniversalUnitConverter(conversionFactor)
  
      const input: Measurement<MeasurementType.time> = { value: 3600 * 6, unit: Unit.second }
      const targetUnit: MeasurementUnit<MeasurementType.time> = Unit.day
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 0.25, unit: targetUnit })
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
    const converter = new UniversalUnitConverter(LengthConversionFactors, MeasurementStandard.international)

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
          ...LengthConversionFactors.conversionFactors.filter(conversion => conversion.toUnit !== Unit.centimeter && conversion.toUnit !== Unit.kilometer),
          { toUnit: Unit.centimeter, conversionFunctions: new MultiplicationFactorConversionStrategy(1 / 100) },
          { toUnit: Unit.kilometer, conversionFunctions: new MultiplicationFactorConversionStrategy(1000) },
        ]
      }
      const converter = new UniversalUnitConverter(conversionFactor)

      const input: Measurement<MeasurementType.length> = { value: 100 * 1000, unit: Unit.centimeter }
      const targetUnit: MeasurementUnit<MeasurementType.length> = Unit.kilometer

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 1, unit: targetUnit })
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

  describe('Weight conversion', () => {
    const converter = new UniversalUnitConverter(WeightConversionFactors, MeasurementStandard.international)

    it('should convert a value from one unit to another', () => {
      const input: Measurement<MeasurementType.weight> = { value: 1, unit: Unit.kilogram }
      const targetUnit: MeasurementUnit<MeasurementType.weight> = Unit.tonne

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 0.001, unit: targetUnit })
    })

    it('should convert a value from one unit to another even if conversionFactor reference unit is not the smallest unit ', () => {
      const conversionFactor = {
        measurementType: MeasurementType.weight,
        conversionFactors: [
          ...WeightConversionFactors.conversionFactors.filter(conversion => conversion.toUnit !== Unit.gram && conversion.toUnit !== Unit.tonne),
          { toUnit: Unit.gram, conversionFunctions: new MultiplicationFactorConversionStrategy(1 / 1000) },
          { toUnit: Unit.tonne, conversionFunctions: new MultiplicationFactorConversionStrategy(1000) },
        ]
      }
      const converter = new UniversalUnitConverter(conversionFactor)

      const input: Measurement<MeasurementType.weight> = { value: 1000 * 1000, unit: Unit.gram }
      const targetUnit: MeasurementUnit<MeasurementType.weight> = Unit.tonne

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 1, unit: targetUnit })
    })

    it('should convert a value from a larger unit to a smaller unit', () => {
      const input: Measurement<MeasurementType.weight> = { value: 1, unit: Unit.pound }
      const targetUnit: MeasurementUnit<MeasurementType.weight> = Unit.ounce

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 16, unit: Unit.ounce })
    })

    it('should handle multiple conversion steps correctly', () => {
      const input: Measurement<MeasurementType.weight> = { value: 1, unit: Unit.tonne }
      const targetUnit: MeasurementUnit<MeasurementType.weight> = Unit.gram

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 1 * 1000 * 1000, unit: targetUnit })
    })
  })

  describe('Area conversion', () => {
    const converter = new UniversalUnitConverter(AreaConversionFactors)
  
    it('should convert a value from one unit to another', () => {
      const input: Measurement<MeasurementType.area> = { value: 1, unit: Unit.squareMeter }
      const targetUnit: MeasurementUnit<MeasurementType.area> = Unit.squareCm
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 10_000, unit: targetUnit })
    })
  
    it('should convert a value from one unit to another even if conversionFactor reference unit is not the smallest unit', () => {
      const conversionFactor = {
        measurementType: MeasurementType.area,
        conversionFactors: [
          ...AreaConversionFactors.conversionFactors.filter(conversion => conversion.toUnit !== Unit.squareMeter && conversion.toUnit !== Unit.squareMm),
          { toUnit: Unit.squareMeter, conversionFunctions: new MultiplicationFactorConversionStrategy(1) },
          { toUnit: Unit.squareMm, conversionFunctions: new MultiplicationFactorConversionStrategy(1 / 1_000_000) },
        ],
      }
      const converter = new UniversalUnitConverter(conversionFactor)
  
      const input: Measurement<MeasurementType.area> = { value: 1_000_000, unit: Unit.squareMm }
      const targetUnit: MeasurementUnit<MeasurementType.area> = Unit.squareMeter
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 1, unit: targetUnit })
    })
  
    it('should convert a value from a larger unit to a smaller unit', () => {
      const input: Measurement<MeasurementType.area> = { value: 1, unit: Unit.hectare }
      const targetUnit: MeasurementUnit<MeasurementType.area> = Unit.squareMeter
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 10_000, unit: targetUnit })
    })
  
    it('should handle multiple conversion steps correctly', () => {
      const input: Measurement<MeasurementType.area> = { value: 1, unit: Unit.acre }
      const targetUnit: MeasurementUnit<MeasurementType.area> = Unit.squareMeter
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 4046.8564224, unit: targetUnit })
    })
  })
  
  describe('Volume conversion', () => {
    const converter = new UniversalUnitConverter(VolumeConversionFactors)
  
    it('should convert a value from one unit to another', () => {
      const input: Measurement<MeasurementType.volume> = { value: 1, unit: Unit.liter }
      const targetUnit: MeasurementUnit<MeasurementType.volume> = Unit.milliliter
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 1000, unit: targetUnit })
    })
  
    it('should convert a value from one unit to another even if conversionFactor reference unit is not the smallest unit', () => {
      const conversionFactor = {
        measurementType: MeasurementType.volume,
        conversionFactors: [
          ...VolumeConversionFactors.conversionFactors.filter(conversion => conversion.toUnit !== Unit.liter && conversion.toUnit !== Unit.milliliter),
          { toUnit: Unit.liter, conversionFunctions: new MultiplicationFactorConversionStrategy(1) },
          { toUnit: Unit.milliliter, conversionFunctions: new MultiplicationFactorConversionStrategy(1 / 1000) },
        ],
      }
      const converter = new UniversalUnitConverter(conversionFactor)
  
      const input: Measurement<MeasurementType.volume> = { value: 1000, unit: Unit.milliliter }
      const targetUnit: MeasurementUnit<MeasurementType.volume> = Unit.liter
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 1, unit: targetUnit })
    })
  
    it('should convert a value from a larger unit to a smaller unit', () => {
      const input: Measurement<MeasurementType.volume> = { value: 1, unit: Unit.meterCube }
      const targetUnit: MeasurementUnit<MeasurementType.volume> = Unit.liter
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 1000, unit: targetUnit })
    })
  
    it('should handle multiple conversion steps correctly', () => {
      const input: Measurement<MeasurementType.volume> = { value: 1, unit: Unit.gallon }
      const targetUnit: MeasurementUnit<MeasurementType.volume> = Unit.milliliter
  
      const result = converter.getUnitConvertedValue(input, targetUnit)
  
      expect(result).toEqual({ value: 3785.411784, unit: targetUnit })
    })
  })
  
  describe('Temperature conversion', () => {
    const converter = new UniversalUnitConverter(TemperatureConversionFactors)

    it('should convert a value from Celsius to Fahrenheit', () => {
      const input: Measurement<MeasurementType.temperature> = { value: 0, unit: Unit.degreesCelsius }
      const targetUnit: MeasurementUnit<MeasurementType.temperature> = Unit.degreesFahrenheit

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 32, unit: targetUnit })
    })

    it('should convert a value from Fahrenheit to Celsius', () => {
      const input: Measurement<MeasurementType.temperature> = { value: 32, unit: Unit.degreesFahrenheit }
      const targetUnit: MeasurementUnit<MeasurementType.temperature> = Unit.degreesCelsius

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 0, unit: targetUnit })
    })

    it('should convert a value from Celsius to Kelvin', () => {
      const input: Measurement<MeasurementType.temperature> = { value: 0, unit: Unit.degreesCelsius }
      const targetUnit: MeasurementUnit<MeasurementType.temperature> = Unit.kelvin

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 273.15, unit: targetUnit })
    })

    it('should convert a value from Kelvin to Celsius', () => {
      const input: Measurement<MeasurementType.temperature> = { value: 273.15, unit: Unit.kelvin }
      const targetUnit: MeasurementUnit<MeasurementType.temperature> = Unit.degreesCelsius

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 0, unit: targetUnit })
    })

    it('should convert a value from Fahrenheit to Kelvin', () => {
      const input: Measurement<MeasurementType.temperature> = { value: 32, unit: Unit.degreesFahrenheit }
      const targetUnit: MeasurementUnit<MeasurementType.temperature> = Unit.kelvin

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 273.15, unit: targetUnit })
    })

    it('should convert a value from Kelvin to Fahrenheit', () => {
      const input: Measurement<MeasurementType.temperature> = { value: 273.15, unit: Unit.kelvin }
      const targetUnit: MeasurementUnit<MeasurementType.temperature> = Unit.degreesFahrenheit

      const result = converter.getUnitConvertedValue(input, targetUnit)

      expect(result).toEqual({ value: 32, unit: targetUnit })
    })
  })
})