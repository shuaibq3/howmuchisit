import fs from 'fs'
import path from 'path'
import CustomError from '../utils/errors/CustomError'
import LanguageConfig, { Language } from './languageConfig'

export async function getLanguageConfig(language: Language): Promise<LanguageConfig> {
  try {
    const languageConfig = await import(`./${language}.ts`)
    return languageConfig.default
  } catch (error) {
    throw new CustomError('languageModuleNotDefined', (error as Error).message)
  }
}

export async function getLanguageConfigList(): Promise<LanguageConfig['config'][]> {
  const directoryPath = path.resolve(__dirname)
  const languageModules: string[] = fs.readdirSync(directoryPath)
  const languageConfigs = languageModules
    .map(languageModule => getLanguageConfig(languageModule.replace('.ts', '') as Language)
      .catch(() => undefined))
  return Promise.all(languageConfigs)
    .then(configs => configs.filter(config => config?.config?.languageCode)
      .map(config => (config as LanguageConfig).config))
}