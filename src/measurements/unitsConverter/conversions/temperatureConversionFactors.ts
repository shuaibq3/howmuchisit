import MeasurementType from '../../config/types'
import Unit from '../../units/units'
import ConversionFactor from './conversionFactor'
import CtoKConversionStrategy from './conversionStrategies/CtoKConversionStrategy'
import CtoFConversionStrategy from './conversionStrategies/CtoFConversionStrategy'
import UnitValueConversionStrategy from './conversionStrategies/UnitValueConversionStrategy'

const TemperatureConversionFactors: ConversionFactor<MeasurementType.temperature> = {
  conversionFactors: [
    { 
      toUnit: Unit.degreesCelsius, 
      conversionFunctions: new UnitValueConversionStrategy()
    },
    { 
      toUnit: Unit.kelvin, 
      conversionFunctions: new CtoKConversionStrategy()
    },
    { // C / 5 = (F - 32) / 9
      toUnit: Unit.degreesFahrenheit, 
      conversionFunctions: new CtoFConversionStrategy()
    },
  ],
  measurementType: MeasurementType.temperature
}

export default TemperatureConversionFactors