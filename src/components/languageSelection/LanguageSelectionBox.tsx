import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import { getLanguageConfigList } from '../../language/languageConfigUtils'
import { DropDown } from '../core/DropDown'
import LanguageConfig from '../../language/languageConfig'

type LanguageSelectionBoxProps = {
  saveLanguagePreference: (newLanguagePreference: LanguageConfig) => void
}

const LanguageSelectionBox = ({ saveLanguagePreference }: LanguageSelectionBoxProps) => {
  const supportedLanguageList = getLanguageConfigList()
  const { languageConfig: { config: { languageCode } } } = useContext(LanguageContext)
  
  return (
    <DropDown
      options={supportedLanguageList.map(language => ({
        id: language.config.languageCode,
        text: language.config.languageName,
        selected: language.config.languageCode === languageCode,
      }))}
      onSelected={selectedOptionId => {
        const selectedLanguage = supportedLanguageList.find(language => language.config.languageCode === selectedOptionId)
        if (selectedLanguage) {
          saveLanguagePreference(selectedLanguage)
        }
      }}
    />
  )
}

export default LanguageSelectionBox