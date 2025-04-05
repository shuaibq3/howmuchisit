import { useState } from 'react'
import { getNumericValue, NumericValue } from '../../utils/numberUtils'
import Currency from '../../measurements/subjects/currency/currency'

const useHowMuchSubmitButton = () => {
  const [inputValue, setInputValue] = useState<NumericValue>(0)
  const [measurementContext, setMeasurementContext] = useState<Currency>()

  const onSubmit = (howMuchStringValue: string, measurementContext: Currency) => {
    const numericHowMuchValue = getNumericValue(howMuchStringValue)
    setInputValue(numericHowMuchValue)
    setMeasurementContext(measurementContext)
  }

  return { inputValue, measurementContext, onSubmit }
}

export default useHowMuchSubmitButton