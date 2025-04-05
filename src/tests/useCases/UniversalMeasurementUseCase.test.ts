import MeasurementSubject from '../../measurements/subjects/measurementSubject'
import { Measurement, MeasurementStandard, MeasurementType } from '../../measurements/types'
import Unit from '../../measurements/units/units'
import UniversalMeasurementUseCase from '../../useCases/UniversalMeasurementUseCase'

describe('UniversalMeasurementUseCase', () => {
  describe('getMeasurementMatrix', () => {
    it('should return the correct measurement matrix for given use case measurements and supported unit standard', () => {
      type SupportedUseCases = [MeasurementType.time, MeasurementType.length, MeasurementType.weight]

      const measurementContext: MeasurementSubject<SupportedUseCases> = {
        type: 'Currency',
        supportedUseCases: [MeasurementType.time, MeasurementType.length, MeasurementType.weight]
      }
      const useCaseWiseMeasurement: Record<SupportedUseCases[number], Measurement<SupportedUseCases[number]>> = {
        length: { value: 1000, unit: Unit.meter },
        weight: { value: 5000, unit: Unit.gram },
        time: { value: 1200, unit: Unit.second }
      }
      const mockSupportedUnitStandard = MeasurementStandard.international
      const useCase = new UniversalMeasurementUseCase(measurementContext)

      const result = useCase.getMeasurementMatrix(useCaseWiseMeasurement, mockSupportedUnitStandard)

      expect(result).toEqual({
        [MeasurementType.length]: [{ value: 1, unit: Unit.kilometer }],
        [MeasurementType.weight]: [{ value: 5, unit: Unit.kilogram }],
        [MeasurementType.time]: [{ value: 20, unit: Unit.minute }]
      })
    })
  })

  describe('getMeasurementMatrixString', () => {
    it('should return the correct string representation for the broken down measurements', () => {
      type SupportedUseCases = [MeasurementType.time, MeasurementType.length]

      const measurementContext: MeasurementSubject<SupportedUseCases> = {
        type: 'Currency',
        supportedUseCases: [MeasurementType.time, MeasurementType.length]
      }
      const useCase = new UniversalMeasurementUseCase(measurementContext)

      const brokenDownMeasurements: Record<SupportedUseCases[number], Measurement<SupportedUseCases[number]>[]> = {
        length: [
          { value: 5, unit: Unit.kilometer },
          { value: 500, unit: Unit.meter }
        ],
        time: [
          { value: 2, unit: Unit.hour },
          { value: 30, unit: Unit.minute }
        ]
      }

      const result = useCase.getMeasurementMatrixString(brokenDownMeasurements)

      expect(result).toEqual({
        [MeasurementType.length]: '5 kilometers, 500 meters',
        [MeasurementType.time]: '2 hours, 30 minutes'
      })
    })

    it('should handle singular units correctly (value is 1)', () => {
      type SupportedUseCases = [MeasurementType.weight]

      const measurementContext: MeasurementSubject<SupportedUseCases> = {
        type: 'Currency',
        supportedUseCases: [MeasurementType.weight]
      }
      const useCase = new UniversalMeasurementUseCase(measurementContext)

      const brokenDownMeasurements: Record<SupportedUseCases[number], Measurement<SupportedUseCases[number]>[]> = {
        weight: [
          { value: 1, unit: Unit.kilogram },
          { value: 500, unit: Unit.gram }
        ]
      }

      const result = useCase.getMeasurementMatrixString(brokenDownMeasurements)

      expect(result).toEqual({
        [MeasurementType.weight]: '1 kilogram, 500 grams'
      })
    })

    it('should return an empty string for a measurement type with no breakdowns', () => {
      type SupportedUseCases = [MeasurementType.time]

      const measurementContext: MeasurementSubject<SupportedUseCases> = {
        type: 'Currency',
        supportedUseCases: [MeasurementType.time]
      }
      const useCase = new UniversalMeasurementUseCase(measurementContext)

      const brokenDownMeasurements: Record<SupportedUseCases[number], Measurement<SupportedUseCases[number]>[]> = {
        time: []
      }

      const result = useCase.getMeasurementMatrixString(brokenDownMeasurements)

      expect(result).toEqual({
        [MeasurementType.time]: ''
      })
    })
  })
})