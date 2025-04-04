import { MeasurementType } from '../../types'
import { MeasurementUnit } from '../../units/units'
import ConversionStrategy from './conversionStrategies/ConversionStrategy'

type ConversionFactor<T extends MeasurementType> = {
  conversionFactors: { toUnit: MeasurementUnit<T>, conversionFunctions: ConversionStrategy }[],
  measurementType: T
}

export default ConversionFactor