import { getNumericValue } from '../utils/numberUtils'

const useHowMuchSubmitButtonHook = () => {
  const onSubmit = (howMuchStringValue: string) => {
    const numericHowMuchValue = getNumericValue(howMuchStringValue)
    console.log('Button clicked', numericHowMuchValue)
  }

  return { onSubmit }
}

export default useHowMuchSubmitButtonHook