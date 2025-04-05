import { useContext } from 'react'
import Currency from '../../measurements/subjects/currency/currency'
import { Measurement, MeasurementType } from '../../measurements/types'
import Unit from '../../measurements/units/units'
import UniversalMeasurementUseCase from '../../useCases/UniversalMeasurementUseCase'
import { NumericValue } from '../../utils/numberUtils'
import { divide, multiply } from '../../utils/numericalOperations'
import UnitStandardContext from '../contexts/UnitStandardContext'
import { convertToAreaOrVolume } from '../../measurements/units/unitUtils'

const useResultUseCases = (inputValue: NumericValue, measurementContext: Currency) => {
  const { unitStandard } = useContext(UnitStandardContext)
  const universalMeasurementUseCases = new UniversalMeasurementUseCase(measurementContext)
  
  const useCaseMeasurements = measurementContext.supportedUseCases.reduce((acc, measurementType) => {
    switch (measurementType) {
      case MeasurementType.time:
        return { ...acc, [measurementType]: { value: divide(inputValue, 10), unit: Unit.second } }
      case MeasurementType.length:
        return { 
          ...acc, 
          [measurementType]: { 
            ...measurementContext.length, 
            value: divide(multiply(inputValue, measurementContext.length.value), measurementContext.value) 
          } 
        }
      case MeasurementType.area:
        return { 
          ...acc, 
          [measurementType]: { 
            value: divide(multiply(inputValue, measurementContext.length.value, measurementContext.width.value), measurementContext.value),
            unit: convertToAreaOrVolume(measurementContext.length.unit, measurementContext.width.unit)
          } 
        }
      case MeasurementType.volume:
        return { 
          ...acc, 
          [measurementType]: { 
            value: divide(multiply(inputValue, measurementContext.length.value, measurementContext.width.value, measurementContext.thickness.value), measurementContext.value),
            unit: convertToAreaOrVolume(measurementContext.length.unit, measurementContext.width.unit, measurementContext.thickness.unit)
          } 
        }
      case MeasurementType.weight:
        return { 
          ...acc, 
          [measurementType]: { 
            value: divide(multiply(inputValue, measurementContext.weight.value), measurementContext.value),
            unit: measurementContext.weight.unit 
          } 
        }
    }
  }, {} as Record<Currency['supportedUseCases'][number], Measurement<MeasurementType>>)

  const measurementMatrix = universalMeasurementUseCases.getMeasurementMatrix(useCaseMeasurements, unitStandard)
  return { measurementMatrix, measurementMatrixString: universalMeasurementUseCases.getMeasurementMatrixString(measurementMatrix) }
}

export default useResultUseCases 