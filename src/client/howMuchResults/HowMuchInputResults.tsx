import React, { useContext } from 'react'
import { NumericValue } from '../../utils/numberUtils'
import currencyUseCases from '../../useCases/currencyUseCases'
import Currency from '../../measurements/subjects/currency/currency'
import UnitStandardContext from '../contexts/UnitStandardContext'

type TimeUseCaseProps = {
  inputValue: NumericValue
  measurementContext: Currency
}

const HowMuchInputResults = ({ inputValue, measurementContext }: TimeUseCaseProps) => {
  const { unitStandard } = useContext(UnitStandardContext)
  const { measurementMatrixString } = currencyUseCases(inputValue, measurementContext, unitStandard)

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