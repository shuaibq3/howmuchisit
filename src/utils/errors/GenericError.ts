const Errors = {
  'notInt': { message: 'Value is not a number', numericCode: 500 },
  'invalidUnit': { message: 'Invalid unit', numericCode: 501 },
  'conversionFactorNotDefined': { message: 'Conversion factor not defined', numericCode: 502 },
} as const

type ErrorCode = keyof typeof Errors;

export default class GenericError extends Error {
  constructor(readonly errorCode: ErrorCode, customMessage?: string, appendToMessage?: string[]) {
    super(customMessage || `${Errors[errorCode].message}${appendToMessage ? `: ${appendToMessage?.join(' ')}` : ''}`)
  }
}