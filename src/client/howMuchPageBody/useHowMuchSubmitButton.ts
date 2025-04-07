import { useState } from 'react'
import { getNumericValue, NumericValue } from '../../utils/numberUtils'

const useHowMuchSubmitButton = () => {
  const [inputValue, setInputValue] = useState<NumericValue>(0)

  const onSubmit = (howMuchStringValue: string) => {
    const numericHowMuchValue = getNumericValue(howMuchStringValue)
    setInputValue(numericHowMuchValue)
  }

  return { inputValue, onSubmit }
}

export default useHowMuchSubmitButton