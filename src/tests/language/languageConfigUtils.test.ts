import { getLanguageConfig } from '../../language/languageConfigUtils'
import { Language } from '../../language/languageConfig'
import EnglishConfig from '../../language/en'
import BanglaConfig from '../../language/bn'
import ApplicationErrors from '../../utils/errors/ApplicationError'

describe('languageConfigUtils', () => {
  describe('getLanguageConfig', () => {
    it('has language support for english', () => {
      const languageConfig = getLanguageConfig('en')
      expect(languageConfig).toEqual(EnglishConfig)
    })

    it('has language support for bangla', () => {
      const languageConfig = getLanguageConfig('bn')
      expect(languageConfig).toEqual(BanglaConfig)
    })

    it('should throw languageNotFound error if language support does not exist', () => {
      try {
        getLanguageConfig('fr' as Language)
        expect(true).toBe(false)
      } catch (error) {
        expect((error as Error).message.startsWith(ApplicationErrors.languageModuleNotDefined.message)).toEqual(true)
      }
    })
  })
})