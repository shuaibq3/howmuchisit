import { useState } from 'react'
import LanguageConfig, { Language } from '../../language/languageConfig'
import { MeasurementStandard } from '../../measurements/types'
import { getLanguageConfig } from '../../language/languageConfigUtils'
import { getValueFromStore, storeValue } from '../../utils/persistentStorage'
import EnglishConfig from '../../language/en'

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

export default function useUserPreference() {
  const [languageConfig, setLanguageConfig] = useState(getUserPreferredLanguageConfig())
  const [preferredUnitStandard, setUnitStandard] = useState(getUserPreferredUnitStandard())

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

  return { languageConfig, saveLanguagePreference, preferredUnitStandard, saveUnitStandardPreference }
}