import { NumericValue } from '../../../../utils/numberUtils'
import { add, subtract } from '../../../../utils/numericalOperations'
import ConversionStrategy from './ConversionStrategy'

export default class CtoKConversionStrategy implements ConversionStrategy {
  readonly conversionConstant = 273.15

  conversionToGranularUnit(value: NumericValue): NumericValue {
    return subtract(value, this.conversionConstant)
  }

  convertFromGranularUnit(value: NumericValue): NumericValue {
    return add(value, this.conversionConstant)
  }

  getConversionConstant(): number {
    return this.conversionConstant
  }
}