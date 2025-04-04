import { NumericValue } from '../utils/numberUtils'
import { MeasurementUnit } from './units/units'

export enum MeasurementType {
  time = 'time',
  weight = 'weight',
  temperature = 'temperature',
  length = 'length',
  area = 'area',
  volume = 'volume'
}

export type Measurement<T extends MeasurementType> = { value: NumericValue; unit: MeasurementUnit<T> }

export enum MeasurementStandard {
  international = 'international',
  imperial = 'imperial'
}
