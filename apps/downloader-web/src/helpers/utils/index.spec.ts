import { isUrl } from '@web/helpers/utils/index'

describe('Utils', () => {
  describe('isUrl', () => {
    it('should check a valid url', async () => {
      const result = await isUrl('http://www.sample.com/asdf/ASDf')
      expect(result).toBe(true)
    })
    it('should check an invalid url', async () => {
      const result = await isUrl(undefined)
      expect(result).toBe(false)
    })
  })
})
