import React from 'react'
import HowMuchIsItInput from './howMuchInputs/HowMuchIsItInput'
import LanguageContext from './contexts/LanguageContext'
import LanguageSelectionBox from './userPreferenceSelection/LanguageSelectionBox'
import useHowMuchSubmitButtonHook from './useHowMuchSubmitButton'
import UnitStandardContext from './contexts/UnitStandardContext'
import UnitStandardSelectionBox from './userPreferenceSelection/UnitStandardSelectionBox'
import useUserPreference from './userPreferenceSelection/useUserPreference'

const App: React.FC = () => {
  const { languageConfig, saveLanguagePreference, preferredUnitStandard, saveUnitStandardPreference } = useUserPreference()
  const { onSubmit } = useHowMuchSubmitButtonHook()

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