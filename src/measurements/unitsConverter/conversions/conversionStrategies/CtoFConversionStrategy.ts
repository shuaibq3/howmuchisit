import { NumericValue } from '../../../../utils/numberUtils'
import { add, divide, multiply, subtract } from '../../../../utils/numericalOperations'
import ConversionStrategy from './ConversionStrategy'

export default class CtoFConversionStrategy implements ConversionStrategy {
  conversionToGranularUnit(value: NumericValue): NumericValue {
    return multiply(divide(subtract(value, 32), 9), 5)
  }

  convertFromGranularUnit(value: NumericValue): NumericValue {
    return add(multiply(divide(value, 5), 9), 32) 
  }

  getConversionConstant(): number | undefined {
    return undefined
  }
}