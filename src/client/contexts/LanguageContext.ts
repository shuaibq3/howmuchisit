import { createContext } from 'react'
import LanguageConfig, { Language } from '../../language/languageConfig'

const LanguageContext = createContext<{languageConfig: LanguageConfig }>({
  languageConfig: { config: { languageCode: '' as Language, languageName: '' }, constants: {} },
})

export default LanguageContext
