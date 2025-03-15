import React from "react"
import Input from "../core/Input"
import Button from "../core/Button"
import useHowMuchInputHook from "./useHowMuchInput"
import useHowMuchSubmitButtonHook from "./useHowMuchSubmitButton"

const HowMuchIsItInput: React.FC = () => {
  const { inputValue, errorMessage, handleChange } = useHowMuchInputHook()
  const { onClick } = useHowMuchSubmitButtonHook()

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Input 
        inputType='text' 
        placeholderText='Numbers only please' 
        errorMessage={errorMessage} 
        value={inputValue} 
        handleChange={handleChange}
      />
      <Button label='How much is it?' onClick={onClick} disabled={!inputValue.length || !!errorMessage} />
    </div>
  )
}

export default HowMuchIsItInput