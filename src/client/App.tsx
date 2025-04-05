import React, { useState } from 'react'
import HowMuchIsItInput from './howMuchInputs/HowMuchIsItInput'
import EnglishConfig from '../language/en'
import LanguageContext from './contexts/LanguageContext'
import LanguageSelectionBox from './userPreferenceSelection/LanguageSelectionBox'
import { getValueFromStore, storeValue } from '../utils/persistentStorage'
import LanguageConfig, { Language } from '../language/languageConfig'
import { getLanguageConfig } from '../language/languageConfigUtils'
import useHowMuchSubmitButtonHook from './useHowMuchSubmitButton'
import { MeasurementStandard } from '../measurements/types'
import UnitStandardContext from './contexts/UnitStandardContext'
import UnitStandardSelectionBox from './userPreferenceSelection/UnitStandardSelectionBox'

const getUserPreferredLanguageConfig = (): LanguageConfig => {
  try {
    const languagePreference = getValueFromStore<Language>('languagePreference')
    if (languagePreference) {
      return getLanguageConfig(languagePreference)
    }
  } catch (error) {
    console.warn(error, 'Using English as default language')
  }

  return EnglishConfig
}

const getUserPreferredUnitStandard = (): MeasurementStandard => {
  try {
    const unitStandardPreference = getValueFromStore<MeasurementStandard>('unitStandardPreference')
    if (unitStandardPreference) {
      return unitStandardPreference
    }
  } catch (error) {
    console.warn(error, 'Using international standard as default')
  }

  return MeasurementStandard.international
}

const App: React.FC = () => {
  const [languageConfig, setLanguageConfig] = useState(getUserPreferredLanguageConfig())
  const [preferredUnitStandard, setUnitStandard] = useState(getUserPreferredUnitStandard())

  const { onSubmit } = useHowMuchSubmitButtonHook()

  const saveLanguagePreference = (newLanguageConfig: LanguageConfig) => {
    setLanguageConfig(newLanguageConfig)
    try {
      storeValue('languagePreference', newLanguageConfig.config.languageCode)
    } catch (error) {
      console.warn(error)
    }
  }

  const saveUnitStandardPreference = (preferredUnitStandard: MeasurementStandard) => {
    setUnitStandard(preferredUnitStandard)
    try {
      storeValue('unitStandardPreference', preferredUnitStandard)
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <LanguageContext.Provider value={{ languageConfig }}>
      <UnitStandardContext.Provider value={{ unitStandard: preferredUnitStandard }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ alignSelf: 'flex-end', marginBottom: '10px' }}>
            <LanguageSelectionBox saveLanguagePreference={saveLanguagePreference}/>
            <UnitStandardSelectionBox saveUnitStandardPreference={saveUnitStandardPreference}/>
          </div>
          <HowMuchIsItInput onSubmit={onSubmit}/>
          { }
        </div>
      </UnitStandardContext.Provider>
    </LanguageContext.Provider>
  )
}

export default App