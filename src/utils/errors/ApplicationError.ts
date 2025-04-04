const ApplicationErrors = {
  'notInt': { message: 'Value is not a number', numericCode: 500 },
  'invalidUnit': { message: 'Invalid unit', numericCode: 501 },
  'conversionFactorNotDefined': { message: 'Conversion factor not defined', numericCode: 502 },
  'languageModuleNotDefined': { message: 'Language not defined', numericCode: 600 },
} as const

export type ErrorCode = keyof typeof ApplicationErrors;

export default ApplicationErrors