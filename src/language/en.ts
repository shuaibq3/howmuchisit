import { MeasurementStandard } from '../measurements/types'
import Unit from '../measurements/units/units'
import LanguageConfig from './languageConfig'

const EnglishConfig: LanguageConfig = {
  config: {
    languageCode: 'en',
    languageName: 'English',
  },
  constants: {
    unitStandards: MeasurementStandard,
    units: Unit,
    userPreferenceSelection: {
      language: 'Language',
      unitStandard: 'Unit Standard',
    },
    howMuchIsItInput: {
      hintText: 'How much is it?',
      negativeNumberError: 'Enter a positive number',
      clearButtonText: 'Clear',
      submitButtonText: 'How much is it?',
      thousandButtonText: 'x Thousand',
      millionButtonText: 'x Million',
      billionButtonText: 'x Billion',
      trillionButtonText: 'x Trillion',
      lakhText: 'x Lakh (100 Thousand)',
      croreText: 'x Crore (10 Million)',
    }
  }
}

export default EnglishConfig