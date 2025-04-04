export type Language = 'en' | 'bn'

type LanguageDefinition = {
  languageCode: Language
  languageName: string
}

type LanguageConfig = {
  config: LanguageDefinition
  constants: Record<string, Record<string, string>>
}

export default LanguageConfig