export type Language = 'en' | 'bn'

type LanguageConfig = {
  config: {
    languageCode: Language
    languageName: string
  }
  constants: Record<string, Record<string, string>>
}

export default LanguageConfig