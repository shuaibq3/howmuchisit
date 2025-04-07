import React, { useContext, useState } from 'react'
import { NumericValue } from '../../utils/numberUtils'
import currencyUseCases from '../../useCases/currencyUseCases'
import UnitStandardContext from '../contexts/UnitStandardContext'
import { BDT1000 } from '../../measurements/subjects/currency/BDT'
import Currency from '../../measurements/subjects/currency/currency'

type TimeUseCaseProps = {
  inputValue: NumericValue
}

const HowMuchInputResults = ({ inputValue }: TimeUseCaseProps) => {
  const { unitStandard } = useContext(UnitStandardContext)
  const [currencyContext] = useState<Currency>(BDT1000)
  const { measurementMatrixString } = currencyUseCases(inputValue, currencyContext, unitStandard)

  return (
    <div>
      { Object.entries(measurementMatrixString).map(([measurementType, measurementValue]) => (
        <div key={measurementType} style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold' }}>{measurementType}:</span>
          <span>{measurementValue}</span>
        </div>
      )) }
    </div>
  )
}

export default HowMuchInputResults