import React, { useState } from 'react'
import HowMuchIsItInput from './components/howMuchInputs/HowMuchIsItInput'
import EnglishConfig from './language/en'
import LanguageContext from './components/contexts/LanguageContext'

const App: React.FC = () => {
  const [languageConfig, setLanguageConfig] = useState(EnglishConfig)

  return (
    <LanguageContext.Provider value={{ languageConfig, setLanguageConfig }}>
      <div>
        <HowMuchIsItInput />
      </div>
    </LanguageContext.Provider>
  )
}

export default App