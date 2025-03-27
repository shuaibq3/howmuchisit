import MeasurementType from '../../config/types'
import Unit from '../../units/units'
import ConversionFactor from './conversionFactor'
import MultiplicationFactorConversionStrategy from './conversionStrategies/MultiplicationFactorConversionStrategy'
import UnitValueConversionStrategy from './conversionStrategies/UnitValueConversionStrategy'

const TimeConversionFactors: ConversionFactor<MeasurementType.time> = {
  conversionFactors: [
    { toUnit: Unit.millisecond, conversionFunctions: new UnitValueConversionStrategy() },
    { toUnit: Unit.second, conversionFunctions: new MultiplicationFactorConversionStrategy(1000) },
    { toUnit: Unit.minute, conversionFunctions: new MultiplicationFactorConversionStrategy(60000) }, // 60 * 1000
    { toUnit: Unit.hour, conversionFunctions: new MultiplicationFactorConversionStrategy(3600000) }, // 60 * 60 * 1000
    { toUnit: Unit.day, conversionFunctions: new MultiplicationFactorConversionStrategy(86400000) }, // 24 * 60 * 60 * 1000
    { toUnit: Unit.week, conversionFunctions: new MultiplicationFactorConversionStrategy(604800000) }, // 7 * 24 * 60 * 60 * 1000
    { toUnit: Unit.month, conversionFunctions: new MultiplicationFactorConversionStrategy(2592000000) }, // 30 * 24 * 60 * 60 * 1000
    { toUnit: Unit.year, conversionFunctions: new MultiplicationFactorConversionStrategy(31536000000) }, // 365 * 24 * 60 * 60 * 1000
    { toUnit: Unit.decade, conversionFunctions: new MultiplicationFactorConversionStrategy(315360000000) }, // 10 * 365 * 24 * 60 * 60 * 1000
    { toUnit: Unit.century, conversionFunctions: new MultiplicationFactorConversionStrategy(3153600000000) }, // 100 * 365 * 24 * 60 * 60 * 1000
    { toUnit: Unit.millennium, conversionFunctions: new MultiplicationFactorConversionStrategy(31536000000000) } // 1000 * 365 * 24 * 60 * 60 * 1000
  ],
  measurementType: MeasurementType.time
}

export default TimeConversionFactors