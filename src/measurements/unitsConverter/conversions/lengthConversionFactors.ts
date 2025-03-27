import MeasurementType from '../../config/types'
import Unit from '../../units/units'
import ConversionFactor from './conversionFactor'
import MultiplicationFactorConversionStrategy from './conversionStrategies/MultiplicationFactorConversionStrategy'
import UnitValueConversionStrategy from './conversionStrategies/UnitValueConversionStrategy'

const LengthConversionFactors: ConversionFactor<MeasurementType.length> = {
  conversionFactors: [
    { 
      toUnit: Unit.millimeter, 
      conversionFunctions: new UnitValueConversionStrategy()     
    },
    { 
      toUnit: Unit.centimeter, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(10)      
    },
    { 
      toUnit: Unit.meter, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(1000)      
    },
    { 
      toUnit: Unit.kilometer, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(1_000_000)      
    },
    { 
      toUnit: Unit.lightyear, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(9.461e+18)      
    },
    { 
      toUnit: Unit.inch, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(25.4)      
    },
    { 
      toUnit: Unit.foot, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(304.8)      
    },
    { 
      toUnit: Unit.yard, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(914.4)      
    },
    { 
      toUnit: Unit.mile, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(1_609_344)      
    }
  ],
  measurementType: MeasurementType.length
}

export default LengthConversionFactors