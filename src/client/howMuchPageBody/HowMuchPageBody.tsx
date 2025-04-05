import React from 'react'
import HowMuchIsItInput from '../howMuchInputs/HowMuchIsItInput'
import useHowMuchSubmitButton from './useHowMuchSubmitButton'
import HowMuchInputResults from '../howMuchResults/HowMuchInputResults'

const HowMuchBody = () => {
  const { inputValue, measurementContext, onSubmit } = useHowMuchSubmitButton()

  return (
    <div>
      <HowMuchIsItInput onSubmit={onSubmit}/>
      { inputValue !== 0 && measurementContext && <HowMuchInputResults inputValue={inputValue} measurementContext={measurementContext} /> }
    </div>
  )
}

export default HowMuchBody