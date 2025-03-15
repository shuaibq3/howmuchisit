import GenericError from "./errors/GenericError"
import { isNumber } from "./stringUtils"

export function getNumericValue(numString: string): number | bigint {
  if (!isNumber(numString)) {
    throw new GenericError('notInt')
  }
  const bigIntNumber = BigInt(numString)
  return bigIntNumber > Number.MAX_SAFE_INTEGER || bigIntNumber < Number.MIN_SAFE_INTEGER ? bigIntNumber : Number(numString)
}
