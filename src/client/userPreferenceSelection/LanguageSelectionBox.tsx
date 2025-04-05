import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import { getLanguageConfigList } from '../../language/languageConfigUtils'
import { DropDown } from '../components/DropDown'
import LanguageConfig from '../../language/languageConfig'

type LanguageSelectionBoxProps = {
  saveLanguagePreference: (newLanguagePreference: LanguageConfig) => void
}

const LanguageSelectionBox = ({ saveLanguagePreference }: LanguageSelectionBoxProps) => {
  const supportedLanguageList = getLanguageConfigList()
  const { languageConfig: { config: { languageCode }, constants } } = useContext(LanguageContext)
  
  const onItemSelected = (selectedOptionId: string) => {
    const selectedLanguage = supportedLanguageList.find(language => language.config.languageCode === selectedOptionId)
    if (selectedLanguage) {
      saveLanguagePreference(selectedLanguage)
    }
  }

  return (
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      <span style={{ marginRight: '10px' }}>{constants.userPreferenceSelection.language}</span>
      <DropDown
        options={supportedLanguageList.map(language => ({
          id: language.config.languageCode,
          text: language.config.languageName,
          selected: language.config.languageCode === languageCode,
        }))}
        onSelected={onItemSelected}
      />
    </div>
  )
}

export default LanguageSelectionBox