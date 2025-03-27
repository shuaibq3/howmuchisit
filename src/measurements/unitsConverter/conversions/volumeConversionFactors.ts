import MeasurementType from '../../config/types'
import Unit from '../../units/units'
import ConversionFactor from './conversionFactor'
import MultiplicationFactorConversionStrategy from './conversionStrategies/MultiplicationFactorConversionStrategy'
import UnitValueConversionStrategy from './conversionStrategies/UnitValueConversionStrategy'

const VolumeConversionFactors: ConversionFactor<MeasurementType.volume> = {
  conversionFactors: [
    { 
      toUnit: Unit.mmCube, 
      conversionFunctions: new UnitValueConversionStrategy()
    },
    { 
      toUnit: Unit.cc, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(1000) // 1 cc = 1000 mm³
    },
    { 
      toUnit: Unit.cmCube, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(100) // 1 m³ = 1000 mm³
    },
    { 
      toUnit: Unit.meterCube, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(1e9) // 1 m³ = 1e9 mm³
    },
    { 
      toUnit: Unit.milliliter, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(1000) // 1 milliliter = 1000 mm³
    },
    { 
      toUnit: Unit.liter, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(1e6) // 1 liter = 1e6 mm³
    },
    { 
      toUnit: Unit.cubicFeet, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(28316846.592) // 1 cubic foot = 28316846.592 mm³
    },
    { 
      toUnit: Unit.pint, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(473176.473) // 1 pint = 473176.473 mm³
    },
    { 
      toUnit: Unit.quart, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(946352.946) // 1 quart = 946352.946 mm³
    },
    { 
      toUnit: Unit.gallon, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(3785411.784) // 1 gallon = 3785411.784 mm³
    },
    { 
      toUnit: Unit.barrel, 
      conversionFunctions: new MultiplicationFactorConversionStrategy(158987294.928) // 1 barrel = 158987294.928 mm³
    },
  ],
  measurementType: MeasurementType.volume
}

export default VolumeConversionFactors