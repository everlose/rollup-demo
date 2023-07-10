import { get } from 'lodash-es'
import NIMImpl from '../../src/nim'

describe('NIM', () => {
  test('getInstance', async () => {
    const instance = NIMImpl.getInstance({
      appkey: 'testABC'
    })
    const appkey = get(instance, 'options.appkey')
    expect(appkey).toBe('testABC')
  })
})
