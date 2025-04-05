import React, { useContext } from 'react'
import { DropDown } from '../components/DropDown'
import { MeasurementStandard } from '../../measurements/types'
import UnitStandardContext from '../contexts/UnitStandardContext'
import LanguageContext from '../contexts/LanguageContext'

type UnitStandardSelectionBoxProps = {
  saveUnitStandardPreference: (preferredUnitStandard: MeasurementStandard) => void
}

const UnitStandardSelectionBox = ({ saveUnitStandardPreference }: UnitStandardSelectionBoxProps) => {
  const { unitStandard } = useContext(UnitStandardContext)
  const { languageConfig: { constants } } = useContext(LanguageContext)
  const supportedUnitStandards = Object.values(MeasurementStandard)

  
  const onItemSelected = (selectedOptionId: string) => {
    const selectedUnitStandard = supportedUnitStandards.find(unitStandard => unitStandard === selectedOptionId)
    if (selectedUnitStandard) {
      saveUnitStandardPreference(selectedUnitStandard)
    }
  }

  return (
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      <span style={{ marginRight: '10px' }}>{constants.userPreferenceSelection.unitStandard}</span>
      <DropDown
        options={supportedUnitStandards.map(measurementStandard => ({
          id: measurementStandard,
          text: constants.unitStandards[measurementStandard],
          selected: measurementStandard === unitStandard,
        }))}
        onSelected={onItemSelected}
      />
    </div>
  )
}

export default UnitStandardSelectionBox