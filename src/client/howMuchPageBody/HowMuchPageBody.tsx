import React from 'react'
import HowMuchIsItInput from '../howMuchInputs/HowMuchIsItInput'
import useHowMuchSubmitButton from './useHowMuchSubmitButton'
import HowMuchInputResults from '../howMuchResults/HowMuchInputResults'

const HowMuchBody = () => {
  const { inputValue, onSubmit } = useHowMuchSubmitButton()

  return (
    <div>
      <HowMuchIsItInput onSubmit={onSubmit}/>
      { inputValue !== 0 && <HowMuchInputResults inputValue={inputValue} /> }
    </div>
  )
}

export default HowMuchBody