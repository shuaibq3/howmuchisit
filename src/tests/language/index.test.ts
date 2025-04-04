import { getLanguageConfig, getLanguageConfigList } from '../../language/languageConfigUtils'
import { Language } from '../../language/languageConfig'
import EnglishConfig from '../../language/en'
import BanglaConfig from '../../language/bn'

describe('languageConfigUtils', () => {
  describe('getLanguageConfig', () => {
    it('has language support for english', async() => {
      const languageConfig = await getLanguageConfig('en')
      expect(languageConfig).toEqual(EnglishConfig)
    })

    it('has language support for bangla', async() => {
      const languageConfig = await getLanguageConfig('bn')
      expect(languageConfig).toEqual(BanglaConfig)
    })

    it('should throw languageNotFound error if language support does not exist', async() => {
      try {
        await getLanguageConfig('fr' as Language)
        expect(true).toBe(false)
      } catch (error) {
        expect((error as Error).message.startsWith('Cannot find module \'./fr.ts\'')).toEqual(true)
      }
    })
  })

  describe('getLanguageConfigList', () => {
    it('should return the correct language config list', async() => {
      const languageConfigList = await getLanguageConfigList()
      expect(languageConfigList).toEqual([
        BanglaConfig.config,
        EnglishConfig.config,
      ])
    })
  })
})