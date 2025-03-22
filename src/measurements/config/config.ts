import { LengthUnits, MeasurementStandard, TimeUnits, VolumeUnits, WeightUnits } from '../units/units'
import MeasurementType from './types'

type MeasurementConfig = { [MeasurementType.time]: { units: TimeUnits, standard: MeasurementStandard } } 
  | { [MeasurementType.weight]: { units: WeightUnits, standard: MeasurementStandard } } 
  | { [MeasurementType.temperature]: { units: VolumeUnits, standard: MeasurementStandard } }
  | { [MeasurementType.length]: { units: LengthUnits, standard: MeasurementStandard } } 
  | { [MeasurementType.area]: { units: VolumeUnits, standard: MeasurementStandard } }
  | { [MeasurementType.volume]: { units: VolumeUnits, standard: MeasurementStandard } }

export default MeasurementConfig