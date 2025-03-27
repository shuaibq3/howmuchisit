import { NumericValue } from '../../../../utils/numberUtils'
import ConversionStrategy from './ConversionStrategy'

export default class UnitValueConversionStrategy implements ConversionStrategy {
  conversionToGranularUnit(value: NumericValue): NumericValue {
    return value
  }

  convertFromGranularUnit(value: NumericValue): NumericValue {
    return value
  }

  getConversionConstant(): number {
    return 1
  }
}