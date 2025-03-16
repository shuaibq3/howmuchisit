
import { useState } from 'react'
import { getNumericValue } from '../../utils/numberUtils'

const useHowMuchInputHook = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
  
  const handleChange = (value: string) => {
    try {
      const numberValue = getNumericValue(value)
      setErrorMessage(undefined)
      setInputValue(String(numberValue))
    } catch (error) {
      setErrorMessage((error as Error).message)
    }
  }

  return { inputValue, errorMessage, handleChange }
}

export default useHowMuchInputHook