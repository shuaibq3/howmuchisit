import TimeUnitConverter from '../../../measurements/unitsConverter/TimeConverter'
import Unit, { Measurement } from '../../../measurements/units/units'
import MeasurementType from '../../../measurements/config/types'

describe('TimeUnitConverter', () => {
  let converter: TimeUnitConverter

  beforeEach(() => {
    converter = new TimeUnitConverter()
  })

  describe('convertToMilliseconds', () => {
    it('should convert milliseconds to milliseconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1000, unit: Unit.millisecond }
      const result = converter['convertToMilliseconds'](input)
      expect(result).toBe(1000)
    })

    it('should convert seconds to milliseconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.second }
      const result = converter['convertToMilliseconds'](input)
      expect(result).toBe(1000)
    })

    it('should convert minutes to milliseconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.minute }
      const result = converter['convertToMilliseconds'](input)
      expect(result).toBe(60000)
    })

    it('should convert hours to milliseconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.hour }
      const result = converter['convertToMilliseconds'](input)
      expect(result).toBe(3600000)
    })

    it('should convert days to milliseconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.day }
      const result = converter['convertToMilliseconds'](input)
      expect(result).toBe(86400000)
    })

    it('should convert weeks to milliseconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.week }
      const result = converter['convertToMilliseconds'](input)
      expect(result).toBe(604800000)
    })

    it('should convert months to milliseconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.month }
      const result = converter['convertToMilliseconds'](input)
      expect(result).toBe(2592000000)
    })

    it('should convert years to milliseconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.year }
      const result = converter['convertToMilliseconds'](input)
      expect(result).toBe(31536000000)
    })

    it('should convert decades to milliseconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.decade }
      const result = converter['convertToMilliseconds'](input)
      expect(result).toBe(315360000000)
    })

    it('should convert centuries to milliseconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.century }
      const result = converter['convertToMilliseconds'](input)
      expect(result).toBe(3153600000000)
    })
  })

  describe('convertToSeconds', () => {
    it('should convert milliseconds to seconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1000, unit: Unit.millisecond }
      const result = converter['convertToSeconds'](input)
      expect(result).toBe(1)
    })

    it('should convert seconds to seconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.second }
      const result = converter['convertToSeconds'](input)
      expect(result).toBe(1)
    })

    it('should convert minutes to seconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.minute }
      const result = converter['convertToSeconds'](input)
      expect(result).toBe(60)
    })

    it('should convert hours to seconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.hour }
      const result = converter['convertToSeconds'](input)
      expect(result).toBe(3600)
    })

    it('should convert days to seconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.day }
      const result = converter['convertToSeconds'](input)
      expect(result).toBe(86400)
    })

    it('should convert weeks to seconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.week }
      const result = converter['convertToSeconds'](input)
      expect(result).toBe(604800)
    })

    it('should convert months to seconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.month }
      const result = converter['convertToSeconds'](input)
      expect(result).toBe(2592000)
    })

    it('should convert years to seconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.year }
      const result = converter['convertToSeconds'](input)
      expect(result).toBe(31536000)
    })

    it('should convert decades to seconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.decade }
      const result = converter['convertToSeconds'](input)
      expect(result).toBe(315360000)
    })

    it('should convert centuries to seconds', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.century }
      const result = converter['convertToSeconds'](input)
      expect(result).toBe(3153600000)
    })
  })

  describe('convertToMinutes', () => {
    it('should convert milliseconds to minutes', () => {
      const input: Measurement<MeasurementType.time> = { value: 60000, unit: Unit.millisecond }
      const result = converter['convertToMinutes'](input)
      expect(result).toBe(1)
    })

    it('should convert seconds to minutes', () => {
      const input: Measurement<MeasurementType.time> = { value: 60, unit: Unit.second }
      const result = converter['convertToMinutes'](input)
      expect(result).toBe(1)
    })

    it('should convert minutes to minutes', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.minute }
      const result = converter['convertToMinutes'](input)
      expect(result).toBe(1)
    })

    it('should convert hours to minutes', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.hour }
      const result = converter['convertToMinutes'](input)
      expect(result).toBe(60)
    })

    it('should convert days to minutes', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.day }
      const result = converter['convertToMinutes'](input)
      expect(result).toBe(1440)
    })

    it('should convert weeks to minutes', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.week }
      const result = converter['convertToMinutes'](input)
      expect(result).toBe(10080)
    })

    it('should convert months to minutes', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.month }
      const result = converter['convertToMinutes'](input)
      expect(result).toBe(43200)
    })

    it('should convert years to minutes', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.year }
      const result = converter['convertToMinutes'](input)
      expect(result).toBe(525600)
    })

    it('should convert decades to minutes', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.decade }
      const result = converter['convertToMinutes'](input)
      expect(result).toBe(5256000)
    })

    it('should convert centuries to minutes', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.century }
      const result = converter['convertToMinutes'](input)
      expect(result).toBe(52560000)
    })
  })

  describe('convertToHours', () => {
    it('should convert milliseconds to hours', () => {
      const input: Measurement<MeasurementType.time> = { value: 3600000, unit: Unit.millisecond }
      const result = converter['convertToHours'](input)
      expect(result).toBe(1)
    })

    it('should convert seconds to hours', () => {
      const input: Measurement<MeasurementType.time> = { value: 3600, unit: Unit.second }
      const result = converter['convertToHours'](input)
      expect(result).toBe(1)
    })

    it('should convert minutes to hours', () => {
      const input: Measurement<MeasurementType.time> = { value: 60, unit: Unit.minute }
      const result = converter['convertToHours'](input)
      expect(result).toBe(1)
    })

    it('should convert hours to hours', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.hour }
      const result = converter['convertToHours'](input)
      expect(result).toBe(1)
    })

    it('should convert days to hours', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.day }
      const result = converter['convertToHours'](input)
      expect(result).toBe(24)
    })

    it('should convert weeks to hours', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.week }
      const result = converter['convertToHours'](input)
      expect(result).toBe(168)
    })

    it('should convert months to hours', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.month }
      const result = converter['convertToHours'](input)
      expect(result).toBe(720)
    })

    it('should convert years to hours', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.year }
      const result = converter['convertToHours'](input)
      expect(result).toBe(8760)
    })

    it('should convert decades to hours', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.decade }
      const result = converter['convertToHours'](input)
      expect(result).toBe(87600)
    })

    it('should convert centuries to hours', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.century }
      const result = converter['convertToHours'](input)
      expect(result).toBe(876000)
    })
  })

  describe('convertToDays', () => {
    it('should convert milliseconds to days', () => {
      const input: Measurement<MeasurementType.time> = { value: 86400000, unit: Unit.millisecond }
      const result = converter['convertToDays'](input)
      expect(result).toBe(1)
    })

    it('should convert seconds to days', () => {
      const input: Measurement<MeasurementType.time> = { value: 86400, unit: Unit.second }
      const result = converter['convertToDays'](input)
      expect(result).toBe(1)
    })

    it('should convert minutes to days', () => {
      const input: Measurement<MeasurementType.time> = { value: 1440, unit: Unit.minute }
      const result = converter['convertToDays'](input)
      expect(result).toBe(1)
    })

    it('should convert hours to days', () => {
      const input: Measurement<MeasurementType.time> = { value: 24, unit: Unit.hour }
      const result = converter['convertToDays'](input)
      expect(result).toBe(1)
    })

    it('should convert days to days', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.day }
      const result = converter['convertToDays'](input)
      expect(result).toBe(1)
    })

    it('should convert weeks to days', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.week }
      const result = converter['convertToDays'](input)
      expect(result).toBe(7)
    })

    it('should convert months to days', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.month }
      const result = converter['convertToDays'](input)
      expect(result).toBe(30)
    })

    it('should convert years to days', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.year }
      const result = converter['convertToDays'](input)
      expect(result).toBe(365)
    })

    it('should convert decades to days', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.decade }
      const result = converter['convertToDays'](input)
      expect(result).toBe(3650)
    })

    it('should convert centuries to days', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.century }
      const result = converter['convertToDays'](input)
      expect(result).toBe(36500)
    })
  })

  describe('convertToWeeks', () => {
    it('should convert milliseconds to weeks', () => {
      const input: Measurement<MeasurementType.time> = { value: 604800000, unit: Unit.millisecond }
      const result = converter['convertToWeeks'](input)
      expect(result).toBe(1)
    })

    it('should convert seconds to weeks', () => {
      const input: Measurement<MeasurementType.time> = { value: 604800, unit: Unit.second }
      const result = converter['convertToWeeks'](input)
      expect(result).toBe(1)
    })

    it('should convert minutes to weeks', () => {
      const input: Measurement<MeasurementType.time> = { value: 10080, unit: Unit.minute }
      const result = converter['convertToWeeks'](input)
      expect(result).toBe(1)
    })

    it('should convert hours to weeks', () => {
      const input: Measurement<MeasurementType.time> = { value: 168, unit: Unit.hour }
      const result = converter['convertToWeeks'](input)
      expect(result).toBe(1)
    })

    it('should convert days to weeks', () => {
      const input: Measurement<MeasurementType.time> = { value: 7, unit: Unit.day }
      const result = converter['convertToWeeks'](input)
      expect(result).toBe(1)
    })

    it('should convert weeks to weeks', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.week }
      const result = converter['convertToWeeks'](input)
      expect(result).toBe(1)
    })

    it('should convert months to weeks', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.month }
      const result = converter['convertToWeeks'](input)
      expect(result).toBeCloseTo(4.2857, 4)
    })

    it('should convert years to weeks', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.year }
      const result = converter['convertToWeeks'](input)
      expect(result).toBeCloseTo(52.1429, 4)
    })

    it('should convert decades to weeks', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.decade }
      const result = converter['convertToWeeks'](input)
      expect(result).toBeCloseTo(521.4286, 4)
    })

    it('should convert centuries to weeks', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.century }
      const result = converter['convertToWeeks'](input)
      expect(result).toBeCloseTo(5214.2857, 4)
    })
  })

  describe('convertToMonths', () => {
    it('should convert milliseconds to months', () => {
      const input: Measurement<MeasurementType.time> = { value: 2592000000, unit: Unit.millisecond }
      const result = converter['convertToMonths'](input)
      expect(result).toBe(1)
    })

    it('should convert seconds to months', () => {
      const input: Measurement<MeasurementType.time> = { value: 2592000, unit: Unit.second }
      const result = converter['convertToMonths'](input)
      expect(result).toBe(1)
    })

    it('should convert minutes to months', () => {
      const input: Measurement<MeasurementType.time> = { value: 43200, unit: Unit.minute }
      const result = converter['convertToMonths'](input)
      expect(result).toBe(1)
    })

    it('should convert hours to months', () => {
      const input: Measurement<MeasurementType.time> = { value: 720, unit: Unit.hour }
      const result = converter['convertToMonths'](input)
      expect(result).toBe(1)
    })

    it('should convert days to months', () => {
      const input: Measurement<MeasurementType.time> = { value: 30, unit: Unit.day }
      const result = converter['convertToMonths'](input)
      expect(result).toBe(1)
    })

    it('should convert months to months', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.month }
      const result = converter['convertToMonths'](input)
      expect(result).toBe(1)
    })

    it('should convert years to months', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.year }
      const result = converter['convertToMonths'](input)
      expect(result).toBeCloseTo(12.167, 3)
    })

    it('should convert decades to months', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.decade }
      const result = converter['convertToMonths'](input)
      expect(result).toBeCloseTo(121.667, 3)
    })

    it('should convert centuries to months', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.century }
      const result = converter['convertToMonths'](input)
      expect(result).toBeCloseTo(1216.667, 3)
    })
  })

  describe('convertToYears', () => {
    it('should convert milliseconds to years', () => {
      const input: Measurement<MeasurementType.time> = { value: 31536000000, unit: Unit.millisecond }
      const result = converter['convertToYears'](input)
      expect(result).toBe(1)
    })

    it('should convert seconds to years', () => {
      const input: Measurement<MeasurementType.time> = { value: 31536000, unit: Unit.second }
      const result = converter['convertToYears'](input)
      expect(result).toBe(1)
    })

    it('should convert minutes to years', () => {
      const input: Measurement<MeasurementType.time> = { value: 525600, unit: Unit.minute }
      const result = converter['convertToYears'](input)
      expect(result).toBe(1)
    })

    it('should convert hours to years', () => {
      const input: Measurement<MeasurementType.time> = { value: 8760, unit: Unit.hour }
      const result = converter['convertToYears'](input)
      expect(result).toBe(1)
    })

    it('should convert days to years', () => {
      const input: Measurement<MeasurementType.time> = { value: 365, unit: Unit.day }
      const result = converter['convertToYears'](input)
      expect(result).toBe(1)
    })

    it('should convert weeks to years', () => {
      const input: Measurement<MeasurementType.time> = { value: 52.1429, unit: Unit.week }
      const result = converter['convertToYears'](input)
      expect(result).toBeCloseTo(1, 4)
    })

    it('should convert months to years', () => {
      const input: Measurement<MeasurementType.time> = { value: 12, unit: Unit.month }
      const result = converter['convertToYears'](input)
      expect(result).toBeCloseTo(0.986, 3)
    })

    it('should convert years to years', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.year }
      const result = converter['convertToYears'](input)
      expect(result).toBe(1)
    })

    it('should convert decades to years', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.decade }
      const result = converter['convertToYears'](input)
      expect(result).toBe(10)
    })

    it('should convert centuries to years', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.century }
      const result = converter['convertToYears'](input)
      expect(result).toBe(100)
    })
  })

  describe('convertToDecades', () => {
    it('should convert milliseconds to decades', () => {
      const input: Measurement<MeasurementType.time> = { value: 315360000000, unit: Unit.millisecond }
      const result = converter['convertToDecades'](input)
      expect(result).toBe(1)
    })

    it('should convert seconds to decades', () => {
      const input: Measurement<MeasurementType.time> = { value: 315360000, unit: Unit.second }
      const result = converter['convertToDecades'](input)
      expect(result).toBe(1)
    })

    it('should convert minutes to decades', () => {
      const input: Measurement<MeasurementType.time> = { value: 5256000, unit: Unit.minute }
      const result = converter['convertToDecades'](input)
      expect(result).toBe(1)
    })

    it('should convert hours to decades', () => {
      const input: Measurement<MeasurementType.time> = { value: 87600, unit: Unit.hour }
      const result = converter['convertToDecades'](input)
      expect(result).toBe(1)
    })

    it('should convert days to decades', () => {
      const input: Measurement<MeasurementType.time> = { value: 3650, unit: Unit.day }
      const result = converter['convertToDecades'](input)
      expect(result).toBe(1)
    })

    it('should convert weeks to decades', () => {
      const input: Measurement<MeasurementType.time> = { value: 521.4286, unit: Unit.week }
      const result = converter['convertToDecades'](input)
      expect(result).toBeCloseTo(1, 4)
    })

    it('should convert months to decades', () => {
      const input: Measurement<MeasurementType.time> = { value: 120, unit: Unit.month }
      const result = converter['convertToDecades'](input)
      expect(result).toBeCloseTo(0.986, 3)
    })

    it('should convert years to decades', () => {
      const input: Measurement<MeasurementType.time> = { value: 10, unit: Unit.year }
      const result = converter['convertToDecades'](input)
      expect(result).toBe(1)
    })

    it('should convert decades to decades', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.decade }
      const result = converter['convertToDecades'](input)
      expect(result).toBe(1)
    })

    it('should convert centuries to decades', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.century }
      const result = converter['convertToDecades'](input)
      expect(result).toBe(10)
    })
  })

  describe('convertToCenturies', () => {
    it('should convert milliseconds to centuries', () => {
      const input: Measurement<MeasurementType.time> = { value: 3153600000000, unit: Unit.millisecond }
      const result = converter['convertToCenturies'](input)
      expect(result).toBe(1)
    })

    it('should convert seconds to centuries', () => {
      const input: Measurement<MeasurementType.time> = { value: 3153600000, unit: Unit.second }
      const result = converter['convertToCenturies'](input)
      expect(result).toBe(1)
    })

    it('should convert minutes to centuries', () => {
      const input: Measurement<MeasurementType.time> = { value: 52560000, unit: Unit.minute }
      const result = converter['convertToCenturies'](input)
      expect(result).toBe(1)
    })

    it('should convert hours to centuries', () => {
      const input: Measurement<MeasurementType.time> = { value: 876000, unit: Unit.hour }
      const result = converter['convertToCenturies'](input)
      expect(result).toBe(1)
    })

    it('should convert days to centuries', () => {
      const input: Measurement<MeasurementType.time> = { value: 36500, unit: Unit.day }
      const result = converter['convertToCenturies'](input)
      expect(result).toBe(1)
    })

    it('should convert weeks to centuries', () => {
      const input: Measurement<MeasurementType.time> = { value: 5214.2857, unit: Unit.week }
      const result = converter['convertToCenturies'](input)
      expect(result).toBeCloseTo(1, 4)
    })

    it('should convert months to centuries', () => {
      const input: Measurement<MeasurementType.time> = { value: 1200, unit: Unit.month }
      const result = converter['convertToCenturies'](input)
      expect(result).toBeCloseTo(.986, 3)
    })

    it('should convert years to centuries', () => {
      const input: Measurement<MeasurementType.time> = { value: 100, unit: Unit.year }
      const result = converter['convertToCenturies'](input)
      expect(result).toBe(1)
    })

    it('should convert decades to centuries', () => {
      const input: Measurement<MeasurementType.time> = { value: 10, unit: Unit.decade }
      const result = converter['convertToCenturies'](input)
      expect(result).toBe(1)
    })

    it('should convert centuries to centuries', () => {
      const input: Measurement<MeasurementType.time> = { value: 1, unit: Unit.century }
      const result = converter['convertToCenturies'](input)
      expect(result).toBe(1)
    })
  })
})