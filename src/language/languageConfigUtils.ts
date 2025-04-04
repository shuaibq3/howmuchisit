import LanguageConfig, { Language } from './languageConfig'
import en from './en'
import bn from './bn'
import CustomError from '../utils/errors/CustomError'

export function getLanguageConfig(language: Language): LanguageConfig {
  switch (language) {
    case 'en':
      return en
    case 'bn':
      return bn
    default:
      throw new CustomError('languageModuleNotDefined', undefined, [language])
  }
}

export function getLanguageConfigList(): LanguageConfig[] {
  return [en, bn]
}