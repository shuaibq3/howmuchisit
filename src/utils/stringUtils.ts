
export function isNumber(value: string) {
  if (!value) {
    return false
  }
  return !isNaN(Number(value))
}

