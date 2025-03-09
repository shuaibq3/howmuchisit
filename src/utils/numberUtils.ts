export function isMaxSafeInteger(num: number): boolean {
  return num <= Number.MAX_SAFE_INTEGER
}

export function isMinSafeInteger(num: number): boolean {
  return num >= Number.MIN_SAFE_INTEGER
}