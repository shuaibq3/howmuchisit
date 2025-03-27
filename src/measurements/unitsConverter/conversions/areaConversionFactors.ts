import MeasurementType from '../../config/types'
import Unit from '../../units/units'
import ConversionFactor from './conversionFactor'
import MultiplicationFactorConversionStrategy from './conversionStrategies/MultiplicationFactorConversionStrategy'
import UnitValueConversionStrategy from './conversionStrategies/UnitValueConversionStrategy'

const AreaConversionFactors: ConversionFactor<MeasurementType.area> = {
  conversionFactors: [
    { 
      toUnit: Unit.squareMm, 
      conversionFunctions: new UnitValueConversionStrategy()
    },
    { 
      toUnit: Unit.squareCm, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(100) // 1 square cm = 100 square mm
    },
    { 
      toUnit: Unit.squareMeter, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(1_000_000) // 1 square meter = 1,000,000 square mm
    },
    { 
      toUnit: Unit.squareKm, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(1_000_000_000_000) // 1 square km = 1,000,000,000,000 square mm
    },
    { 
      toUnit: Unit.squareFeet, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(92_903.04) // 1 square foot = 92,903.04 square mm
    },
    { 
      toUnit: Unit.squareInch, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(645.16) // 1 square inch = 645.16 square mm
    },
    { 
      toUnit: Unit.squareYard, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(836_127.36) // 1 square yard = 836,127.36 square mm
    },
    { 
      toUnit: Unit.squareMile, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(2_589_988_110_336) // 1 square mile = 2,589,988,110,336 square mm
    },
    { 
      toUnit: Unit.acre, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(4_046_856_422.4) // 1 acre = 4,046,856,422.4 square mm
    },
    { 
      toUnit: Unit.hectare, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(10_000_000_000) // 1 hectare = 10,000,000,000 square mm
    },
  ],
  measurementType: MeasurementType.area
}

export default AreaConversionFactors