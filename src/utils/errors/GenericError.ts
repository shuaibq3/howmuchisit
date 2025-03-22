const Errors = {
  'notInt': { message: 'Value is not a number', numericCode: 500 },
  'invalidUnit': { message: 'Invalid unit', numericCode: 501 },
  'invalidUnitConverter': { message: 'Invalid unit converter', numericCode: 502 },
} as const

type ErrorCode = keyof typeof Errors;

export default class GenericError extends Error {
  constructor(readonly errorCode: ErrorCode, customMessage?: string) {
    super(customMessage || Errors[errorCode].message)
  }
}