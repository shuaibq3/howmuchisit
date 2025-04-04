import CustomError from './errors/CustomError'

type StorageKey = 'languagePreference'

export function storeValue(key: StorageKey, value: string | object): void {
  try {
    const serializedValue = typeof value === 'string' ? value : JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
  } catch (error) {
    throw new CustomError('storageError', (error as Error).message, [key])
  }
}

export function getValueFromStore<T>(key: StorageKey): T | undefined {
  try {
    const serializedValue = localStorage.getItem(key)
    if (!serializedValue) {
      return undefined
    }
    return serializedValue.startsWith('{') && serializedValue.endsWith('}') ? JSON.parse(serializedValue) : serializedValue as T
  } catch (error) {
    throw new CustomError('storageError', (error as Error).message, [key])
  }
}