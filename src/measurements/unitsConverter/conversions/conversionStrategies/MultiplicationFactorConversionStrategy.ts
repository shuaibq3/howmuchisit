import { NumericValue } from '../../../../utils/numberUtils'
import { divide, multiply } from '../../../../utils/numericalOperations'
import ConversionStrategy from './ConversionStrategy'

export default class MultiplicationFactorConversionStrategy implements ConversionStrategy {
  constructor(readonly conversionConstant: number) {}

  conversionToGranularUnit(value: NumericValue): NumericValue {
    return multiply(value, this.conversionConstant)
  }

  convertFromGranularUnit(value: NumericValue): NumericValue {
    return divide(value, this.conversionConstant)
  }

  getConversionConstant(): number {
    return this.conversionConstant
  }
}