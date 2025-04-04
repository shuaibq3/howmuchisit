import { createContext } from 'react'
import LanguageConfig, { Language } from '../../language/languageConfig'

const LanguageContext = createContext<{languageConfig: LanguageConfig, setLanguageConfig: (newLanguageConfig: LanguageConfig) => void }>({
  languageConfig: { config: { languageCode: '' as Language, languageName: '' }, constants: {} },
  setLanguageConfig: () => {}
})

export default LanguageContext
