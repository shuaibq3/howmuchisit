import { MeasurementType } from '../types'

type MeasurementContext = 'currency'

type MeasurementSubject<T extends MeasurementType[]> = { 
  type: MeasurementContext
  supportedUseCases: T
}

export default MeasurementSubject