import { MeasurementType } from '../types'

type MeasurementSubject<T extends MeasurementType[]> = { 
  type: string
  supportedUseCases: T
}

export default MeasurementSubject