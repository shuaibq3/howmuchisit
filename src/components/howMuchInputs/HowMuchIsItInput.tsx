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

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Input 
        inputType='text' 
        placeholderText={howMuchIsItInput.hintText}
        errorMessage={errorMessage} 
        value={inputValue} 
        handleChange={handleChange}
      />
      { isBangla ? 
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '10px' }}>
          <Button label="হাজার" onClick={() => multiplyAndAppendToInputValue(1000)} disabled={!inputValue.length || !!errorMessage} />
          <Button label="লক্ষ" onClick={() => multiplyAndAppendToInputValue(1_00_000)} disabled={!inputValue.length || !!errorMessage} />
          <Button label="কোটি" onClick={() => multiplyAndAppendToInputValue(1_00_00_000)} disabled={!inputValue.length || !!errorMessage} />
        </div>
        : <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '10px'  }}>
          <Button label={howMuchIsItInput.thousandButtonText} onClick={() => multiplyAndAppendToInputValue(1000)} disabled={!inputValue.length || !!errorMessage} />
          <Button label={howMuchIsItInput.millionButtonText} onClick={() => multiplyAndAppendToInputValue(1_000_000)} disabled={!inputValue.length || !!errorMessage} />
          <Button label={howMuchIsItInput.billionButtonText} onClick={() => multiplyAndAppendToInputValue(1_000_000_000)} disabled={!inputValue.length || !!errorMessage} />
          <Button label={howMuchIsItInput.trillionButtonText} onClick={() => multiplyAndAppendToInputValue(1_000_000_000_000)} disabled={!inputValue.length || !!errorMessage} />
        </div> }
      <Button label={howMuchIsItInput.clearButtonText} onClick={clearInputField} disabled={!inputValue.length || !!errorMessage} />

      <Button label={howMuchIsItInput.submitButtonText} onClick={onClick} disabled={!inputValue.length || !!errorMessage} />
    </div>
  )
}

export default HowMuchIsItInput