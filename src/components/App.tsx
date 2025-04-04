import React, { useState } from 'react'
import HowMuchIsItInput from './howMuchInputs/HowMuchIsItInput'
import EnglishConfig from '../language/en'
import LanguageContext from './contexts/LanguageContext'
import LanguageSelectionBox from './languageSelection/LanguageSelectionBox'
import { getValueFromStore, storeValue } from '../utils/persistentStorage'
import LanguageConfig, { Language } from '../language/languageConfig'
import { getLanguageConfig } from '../language/languageConfigUtils'
import useHowMuchSubmitButtonHook from './useHowMuchSubmitButton'

const getUserPreferredLanguageConfig = (): LanguageConfig => {
  try {
    const languagePreference = getValueFromStore<string>('languagePreference')
    if (languagePreference) {
      return getLanguageConfig(languagePreference as Language)
    }
    return EnglishConfig
  } catch (error) {
    console.warn(error, 'Using English as default language')
    return EnglishConfig
  }
}

const App: React.FC = () => {
  const [languageConfig, setLanguageConfig] = useState(getUserPreferredLanguageConfig())
  const { onSubmit } = useHowMuchSubmitButtonHook()

  const saveLanguagePreference = (newLanguageConfig: LanguageConfig) => {
    setLanguageConfig(newLanguageConfig)
    try {
      storeValue('languagePreference', newLanguageConfig.config.languageCode)
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <LanguageContext.Provider value={{ languageConfig }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ alignSelf: 'flex-end', marginBottom: '10px' }}>
          <LanguageSelectionBox saveLanguagePreference={saveLanguagePreference}/>
        </div>
        <HowMuchIsItInput onSubmit={onSubmit}/>
        { }
      </div>
    </LanguageContext.Provider>
  )
}

export default App