import { MeasurementStandard } from '../measurements/types'
import LanguageConfig from './languageConfig'

const BanglaConfig: LanguageConfig = {
  config: {
    languageCode: 'bn',
    languageName: 'বাংলা',
  },
  constants: {
    unitStandards: {
      [MeasurementStandard.all]: 'সব',
      [MeasurementStandard.international]: 'আন্তর্জাতিক',
      [MeasurementStandard.imperial]: 'ইম্পেরিয়াল',
    },
    units: {
      millennium: 'সহস্রাব্দ',
      century: 'শতাব্দী',
      decade: 'দশক',
      year: 'বছর',
      month: 'মাস',
      week: 'সপ্তাহ',
      day: 'দিন',
      hour: 'ঘণ্টা',
      minute: 'মিনিট',
      second: 'সেকেন্ড',
      millisecond: 'মিলিসেকেন্ড',
    
      kelvin: 'কেলভিন',
      degreesCelsius: 'ডিগ্রি সেলসিয়াস',
      degreesFahrenheit: 'ডিগ্রি ফারেনহাইট',
     
      tonne: 'টন',
      kilogram: 'কিলোগ্রাম',
      gram: 'গ্রাম',
    
      pound: 'পাউন্ড',
      ounce: 'আউন্স',
    
      lightyear: 'আলোবর্ষ',
      kilometer: 'কিলোমিটার',
      meter: 'মিটার',
      centimeter: 'সেন্টিমিটার',
      millimeter: 'মিলিমিটার',
    
      mile: 'মাইল',
      yard: 'গজ',
      foot: 'ফুট',
      inch: 'ইঞ্চি',
    
      squareMm: 'বর্গ মিলিমিটার',
      squareCm: 'বর্গ সেন্টিমিটার',
      squareMeter: 'বর্গ মিটার',
      squareKm: 'বর্গ কিলোমিটার',
    
      squareFeet: 'বর্গ ফুট',
      squareInch: 'বর্গ ইঞ্চি',
      squareYard: 'বর্গ গজ',
      squareMile: 'বর্গ মাইল',
      acre: 'একর',
      hectare: 'হেক্টর',
    
      mmCube: 'ঘন মিলিমিটার',
      cmCube: 'ঘন সেন্টিমিটার',
      meterCube: 'ঘন মিটার',
      liter: 'লিটার',
      cc: 'সিসি/মিলিলিটার',
    
      cubicFeet: 'ঘন ফুট',
      pint: 'পাইন্ট', 
      quart: 'কোয়ার্ট', 
      gallon: 'গ্যালন',
      barrel: 'ব্যারেল',
    },
    userPreferenceSelection: {
      language: 'ভাষা',
      unitStandard: 'একক',
    },
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