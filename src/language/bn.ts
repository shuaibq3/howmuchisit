import LanguageConfig from './languageConfig'

const BanglaConfig: LanguageConfig = {
  config: {
    languageCode: 'bn',
    languageName: 'বাংলা',
  },
  constants: {
    howMuchIsItInput: {
      hintText: 'কত ?',
      negativeNumberError: 'কেবল ধনাত্মক সংখ্যা লিখুন',
      clearButtonText: 'মুছে ফেলুন',
      submitButtonText: 'কত ?',
      thousandButtonText: 'x হাজার',
      millionButtonText: 'x মিলিয়ন (১০ লক্ষ)',
      billionButtonText: 'x বিলিয়ন (১০০০ কোটি)',
      trillionButtonText: 'x ট্রিলিয়ন (১০০০০০ কোটি)',
      lakhText: 'x লক্ষ',
      croreText: 'x কোটি',
    }
  }
}

export default BanglaConfig