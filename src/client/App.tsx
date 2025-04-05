import React from 'react'
import LanguageContext from './contexts/LanguageContext'
import LanguageSelectionBox from './userPreferenceSelection/LanguageSelectionBox'
import UnitStandardContext from './contexts/UnitStandardContext'
import UnitStandardSelectionBox from './userPreferenceSelection/UnitStandardSelectionBox'
import useUserPreference from './userPreferenceSelection/useUserPreference'
import HowMuchBody from './howMuchPageBody/HowMuchPageBody'

const App: React.FC = () => {
  const { languageConfig, saveLanguagePreference, preferredUnitStandard, saveUnitStandardPreference } = useUserPreference()

  return (
    <LanguageContext.Provider value={{ languageConfig }}>
      <UnitStandardContext.Provider value={{ unitStandard: preferredUnitStandard }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ alignSelf: 'flex-end', marginBottom: '10px' }}>
            <LanguageSelectionBox saveLanguagePreference={saveLanguagePreference}/>
            <UnitStandardSelectionBox saveUnitStandardPreference={saveUnitStandardPreference}/>
          </div>
          <HowMuchBody/>
        </div>
      </UnitStandardContext.Provider>
    </LanguageContext.Provider>
  )
}

export default App