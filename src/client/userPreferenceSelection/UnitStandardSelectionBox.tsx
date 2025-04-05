import React, { useContext } from 'react'
import { DropDown } from '../components/DropDown'
import { MeasurementStandard } from '../../measurements/types'
import UnitStandardContext from '../contexts/UnitStandardContext'

type UnitStandardSelectionBoxProps = {
  saveUnitStandardPreference: (preferredUnitStandard: MeasurementStandard) => void
}

const UnitStandardSelectionBox = ({ saveUnitStandardPreference }: UnitStandardSelectionBoxProps) => {
  const supportedUnitStandards = Object.values(MeasurementStandard)
  const { unitStandard } = useContext(UnitStandardContext)
  
  const onItemSelected = (selectedOptionId: string) => {
    const selectedUnitStandard = supportedUnitStandards.find(unitStandard => unitStandard === selectedOptionId)
    if (selectedUnitStandard) {
      saveUnitStandardPreference(selectedUnitStandard)
    }
  }

  return (
    <DropDown
      options={supportedUnitStandards.map(measurementStandard => ({
        id: measurementStandard,
        text: measurementStandard,
        selected: measurementStandard === unitStandard,
      }))}
      onSelected={onItemSelected}
    />
  )
}

export default UnitStandardSelectionBox