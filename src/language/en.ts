import LanguageConfig from './languageConfig'

const EnglishConfig: LanguageConfig = {
  config: {
    languageCode: 'en',
    languageName: 'English',
  },
  constants: {
    howMuchIsItInput: {
      hintText: 'How much is it?',
      negativeNumberError: 'Enter a positive number',
      clearButtonText: 'Clear',
      submitButtonText: 'How much is it?',
      thousandButtonText: 'x Thousand',
      millionButtonText: 'x Million',
      billionButtonText: 'x Billion',
      trillionButtonText: 'x Trillion',
    }
  }
}

export default EnglishConfig