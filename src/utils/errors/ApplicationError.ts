const ApplicationErrors = {
  'notInt': { message: 'Value is not a number', numericCode: 500 },
  'conversionFactorNotDefined': { message: 'Conversion factor not defined', numericCode: 502 },
  'conversionErrorForDifferentMeasurementTypes': { message: 'Conversion between different measurement types for non same unit is not supported yet', numericCode: 503 },
  'languageModuleNotDefined': { message: 'Language not defined', numericCode: 600 },
  'storageError': { message: 'Language not defined', numericCode: 700 },
} as const

export type ErrorCode = keyof typeof ApplicationErrors;

export default ApplicationErrors