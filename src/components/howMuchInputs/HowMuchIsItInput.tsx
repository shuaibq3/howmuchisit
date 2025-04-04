import React, { useContext, useMemo } from 'react'
import Input from '../core/Input'
import Button from '../core/Button'
import useHowMuchInputHook from './useHowMuchInput'
import useHowMuchSubmitButtonHook from './useHowMuchSubmitButton'
import LanguageContext from '../contexts/LanguageContext'

const HowMuchIsItInput: React.FC = () => {
  const { languageConfig: { config, constants: { howMuchIsItInput } } } = useContext(LanguageContext)
  const isBangla = useMemo(() => config.languageCode === 'bn', [config.languageCode])

  const { inputValue, errorMessage, handleChange, clearInputField, multiplyAndAppendToInputValue } = useHowMuchInputHook(howMuchIsItInput.negativeNumberError)
  const { onClick } = useHowMuchSubmitButtonHook()

  const isDisabled = useMemo(() => !inputValue.length || !!errorMessage, [inputValue, errorMessage])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Input 
        inputType='text' 
        placeholderText={howMuchIsItInput.hintText}
        errorMessage={errorMessage} 
        value={inputValue} 
        handleChange={handleChange}
      />
      {<div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '10px'  }}>
        <Button label={howMuchIsItInput.thousandButtonText} onClick={() => multiplyAndAppendToInputValue(1000)} disabled={isDisabled} />
        { !isBangla ? <>
          <Button label={howMuchIsItInput.millionButtonText} onClick={() => multiplyAndAppendToInputValue(1_000_000)} disabled={isDisabled} />
          <Button label={howMuchIsItInput.billionButtonText} onClick={() => multiplyAndAppendToInputValue(1_000_000_000)} disabled={isDisabled} />
          <Button label={howMuchIsItInput.trillionButtonText} onClick={() => multiplyAndAppendToInputValue(1_000_000_000_000)} disabled={isDisabled} />
        </> : <>
          <Button label={howMuchIsItInput.lakhText} onClick={() => multiplyAndAppendToInputValue(1_000_000)} disabled={isDisabled} />
          <Button label={howMuchIsItInput.croreText} onClick={() => multiplyAndAppendToInputValue(1_000_000_000)} disabled={isDisabled} />
        </> }
        <div style={{ marginLeft: '10px' }}>
          <Button label={howMuchIsItInput.clearButtonText} onClick={clearInputField} disabled={isDisabled} />
        </div>
      </div> }

      <Button label={howMuchIsItInput.submitButtonText} onClick={onClick} disabled={isDisabled} />
    </div>
  )
}

export default HowMuchIsItInput