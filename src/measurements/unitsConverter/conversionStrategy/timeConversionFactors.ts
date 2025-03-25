import MeasurementType from '../../config/types'
import Unit from '../../units/units'
import ConversionFactor from './conversionFactor'

const TimeConversionFactors: ConversionFactor<MeasurementType.time> = {
  conversionFactors: [
    { toUnit: Unit.millisecond, multiplicationFactor: 1 },
    { toUnit: Unit.second, multiplicationFactor: 1000 },
    { toUnit: Unit.minute, multiplicationFactor: 60000 }, // 60 * 1000
    { toUnit: Unit.hour, multiplicationFactor: 3600000 }, // 60 * 60 * 1000
    { toUnit: Unit.day, multiplicationFactor: 86400000 }, // 24 * 60 * 60 * 1000
    { toUnit: Unit.week, multiplicationFactor: 604800000 }, // 7 * 24 * 60 * 60 * 1000
    { toUnit: Unit.month, multiplicationFactor: 2592000000 }, // 30 * 24 * 60 * 60 * 1000
    { toUnit: Unit.year, multiplicationFactor: 31536000000 }, // 365 * 24 * 60 * 60 * 1000
    { toUnit: Unit.decade, multiplicationFactor: 315360000000 },  // 10 * 365 * 24 * 60 * 60 * 1000
    { toUnit: Unit.century, multiplicationFactor: 3153600000000 },  // 100 * 365 * 24 * 60 * 60 * 1000
    { toUnit: Unit.millennium, multiplicationFactor: 31536000000000 } // 1000 * 365 * 24 * 60 * 60 * 1000
  ],
  measurementType: MeasurementType.time
}

export default TimeConversionFactors