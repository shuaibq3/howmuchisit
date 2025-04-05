import React from 'react'
import { NumericValue } from '../../utils/numberUtils'
import useResultUseCases from './useResultUseCases'
import Currency from '../../measurements/subjects/currency/currency'

type TimeUseCaseProps = {
  inputValue: NumericValue
  measurementContext: Currency
}

const HowMuchInputResults = ({ inputValue, measurementContext }: TimeUseCaseProps) => {
  const { measurementMatrixString } = useResultUseCases(inputValue, measurementContext)

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