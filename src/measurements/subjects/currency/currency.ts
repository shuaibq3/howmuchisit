import { MeasurementType } from '../../types'
import { Measurement } from '../../types'
import MeasurementSubject from '../measurementSubject'

type Currency = MeasurementSubject<[MeasurementType.length, MeasurementType.area, MeasurementType.volume, MeasurementType.weight]> & {
  note: string
  value: number
  height: Measurement<MeasurementType.length>
  width: Measurement<MeasurementType.length>
  thickness: Measurement<MeasurementType.length>
  weight: Measurement<MeasurementType.weight>
}

export const CurrencyCommon: Pick<Currency, 'supportedUseCases' | 'type'> = {
  type: 'Currency',
  supportedUseCases: [MeasurementType.length, MeasurementType.area, MeasurementType.volume, MeasurementType.weight]
}

export default Currency