import ApplicationErrors, { ErrorCode } from './ApplicationError'

export default class CustomError extends Error {
  constructor(readonly errorCode: ErrorCode, customMessage?: string, appendToMessage?: string[]) {
    super(customMessage || `${ApplicationErrors[errorCode].message}${appendToMessage ? `: ${appendToMessage?.join(' ')}` : ''}`)
  }
}