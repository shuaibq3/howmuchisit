import React, { useState } from "react"
import Input from "./core/Input"
import { isNumber } from "../utils/stringUtils"
import { isMaxSafeInteger, isMinSafeInteger } from "../utils/numberUtils"

const HowMuchIsItInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

  const handleChange = (value: string) => {
    if (!isNumber(value)) {
      return
    }

    const numberValue = Number(value)
    if (!isMaxSafeInteger(numberValue)) {
      setErrorMessage('Are you insane? I mean, nothing can be larger than this')
      return
    }
    if (!isMinSafeInteger(numberValue)) {
      setErrorMessage('Are you insane? I mean, nothing can be smaller than this')
      return
    }
    setErrorMessage(undefined)
    setInputValue(value)
  }

  return (
    <div>
      <Input 
        inputType='text' 
        placeholderText='How much is it?' 
        errorMessage={errorMessage} 
        value={inputValue} 
        handleChange={handleChange}
      />
    </div>
  )
}

export default HowMuchIsItInput