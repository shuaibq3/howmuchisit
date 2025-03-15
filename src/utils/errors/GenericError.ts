const Errors: Record<string, { message: string, numericCode: number }> = {
  'notInt': { message: 'Value is not a number', numericCode: 500 },
}

type ErrorCode = keyof typeof Errors;

export default class GenericError extends Error {
  constructor(readonly errorCode: ErrorCode, customMessage?: string) {
    super(customMessage || Errors[errorCode].message)
  }
}