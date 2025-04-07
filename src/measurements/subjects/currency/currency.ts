import { MeasurementType } from '../../types'
import { Measurement } from '../../types'
import MeasurementSubject from '../measurementSubject'

type Currency = MeasurementSubject<[MeasurementType.length, MeasurementType.area, MeasurementType.volume, MeasurementType.weight, MeasurementType.time]> & {
  note: string
  value: number
  length: Measurement<MeasurementType.length>
  width: Measurement<MeasurementType.length>
  thickness: Measurement<MeasurementType.length>
  weight: Measurement<MeasurementType.weight>
}

export const CurrencyCommon: Pick<Currency, 'supportedUseCases' | 'type'> = {
  type: 'currency',
  supportedUseCases: [MeasurementType.length, MeasurementType.area, MeasurementType.volume, MeasurementType.weight, MeasurementType.time]
}

export default Currency