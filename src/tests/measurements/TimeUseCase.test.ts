import Decimal from 'decimal.js'
import TimeUseCase from '../../measurements/TimeUseCase'

describe('Time', () => {
  describe('getMeasurementConfig', () => {
    it('should return the correct measurement config', () => {
      const time = new TimeUseCase(10)
      expect(time.getMeasurementConfig()).toEqual({ time: 's' })
    })
  })

  // describe('getMeasurement', () => {
  //   it('should divide the valueToMeasure by digitPerSecond correctly', () => {
  //     const time = new TimeUseCase(100)
  //     expect(time.getMeasurement()).toBe(10)
  //   })

  //   it('should divide the valueToMeasure by digitPerSecond correctly with Decimal', () => {
  //     const time = new TimeUseCase(Decimal(100))
  //     expect(time.getMeasurement().toString()).toBe('10')
  //   })

  //   it('should handle custom digitPerSecond correctly', () => {
  //     const time = new TimeUseCase(100, 20)
  //     expect(time.getMeasurement()).toBe(5)
  //   })

  //   it('should handle custom digitPerSecond correctly with Decimal', () => {
  //     const time = new TimeUseCase(Decimal(100), 20)
  //     expect(time.getMeasurement().toString()).toBe('5')
  //   })
  // })
})