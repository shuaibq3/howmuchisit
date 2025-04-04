
import { useState } from 'react'
import { getNumericValue } from '../../utils/numberUtils'
import { isGreaterThan, multiply } from '../../utils/numericalOperations'

const useHowMuchInputHook = (errorText = '') => {
  const [inputValue, setInputValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

  const multiplyAndAppendToInputValue = (multiplier: number) => {
    const numberValue = getNumericValue(inputValue)
    const multipliedValue = multiply(numberValue, multiplier)
    setInputValue(String(multipliedValue))
  }

  const clearInputField = () => {
    setInputValue('')
  }
  
  const handleChange = (value: string) => {
    try {
      const numberValue = getNumericValue(value)
      if (!isGreaterThan(numberValue, 0)) {
        setErrorMessage(errorText)
        return
      }
      setErrorMessage(undefined)
      setInputValue(String(numberValue))
    } catch {
      if (value.length === 0) {
        setInputValue('')
      }
    }
  }

  return { inputValue, errorMessage, handleChange, clearInputField, multiplyAndAppendToInputValue }
}

export default useHowMuchInputHook