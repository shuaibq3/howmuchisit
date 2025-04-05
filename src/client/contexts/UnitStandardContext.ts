import { createContext } from 'react'
import { MeasurementStandard } from '../../measurements/types'

const UnitStandardContext = createContext<{unitStandard: MeasurementStandard }>({
  unitStandard: '' as MeasurementStandard,
})

export default UnitStandardContext
