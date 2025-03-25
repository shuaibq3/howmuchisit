import MeasurementType from '../../config/types'
import { MeasurementUnit } from '../../units/units'

type ConversionFactor<T extends MeasurementType> = {
  conversionFactors: { toUnit: MeasurementUnit<T>, multiplicationFactor: number }[],
  measurementType: T
}

export default ConversionFactor