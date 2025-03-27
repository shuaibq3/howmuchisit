import MeasurementType from '../../config/types'
import Unit from '../../units/units'
import ConversionFactor from './conversionFactor'
import MultiplicationFactorConversionStrategy from './conversionStrategies/MultiplicationFactorConversionStrategy'
import UnitValueConversionStrategy from './conversionStrategies/UnitValueConversionStrategy'

const WeightConversionFactors: ConversionFactor<MeasurementType.weight> = {
  conversionFactors: [
    { 
      toUnit: Unit.gram, 
      conversionFunctions: new UnitValueConversionStrategy()
    },
    { 
      toUnit: Unit.kilogram, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(1000)
    },
    { 
      toUnit: Unit.tonne, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(1_000_000) // 1 tonne = 1 * 1000 * 1000 grams
    },
    { 
      toUnit: Unit.ounce, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(28.3495) // 1 ounce = 28.3495 grams
    },
    { 
      toUnit: Unit.pound, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(453.592) // 1 pound = 453.592 grams
    },
  ],
  measurementType: MeasurementType.weight
}

export default WeightConversionFactors