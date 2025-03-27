import { NumericValue } from '../../../../utils/numberUtils'

export default interface ConversionStrategy {
  conversionToGranularUnit: (value: NumericValue) => NumericValue 
  convertFromGranularUnit: (value: NumericValue) => NumericValue
  getConversionConstant: () => number | undefined
}