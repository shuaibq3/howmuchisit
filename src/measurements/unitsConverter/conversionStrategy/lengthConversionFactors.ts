import MeasurementType from '../../config/types'
import Unit from '../../units/units'
import ConversionFactor from './conversionFactor'

const LengthConversionFactors: ConversionFactor<MeasurementType.length> = {
  conversionFactors: [
    { toUnit: Unit.millimeter, multiplicationFactor: 1 },
    { toUnit: Unit.centimeter, multiplicationFactor: 10 },
    { toUnit: Unit.meter, multiplicationFactor: 1000 },
    { toUnit: Unit.kilometer, multiplicationFactor: 1000000 },
    { toUnit: Unit.lightyear, multiplicationFactor: 9.461e+18 }, // 1 light year = 9.461e+18 mm
    { toUnit: Unit.inch, multiplicationFactor: 25.4 }, // 1 inch = 25.4 mm
    { toUnit: Unit.foot, multiplicationFactor: 304.8 }, // 1 foot = 304.8 mm
    { toUnit: Unit.yard, multiplicationFactor: 914.4 }, // 1 yard = 914.4 mm
    { toUnit: Unit.mile, multiplicationFactor: 1609344 } // 1 mile = 1609344 mm
  ],
  measurementType: MeasurementType.length
}

export default LengthConversionFactors