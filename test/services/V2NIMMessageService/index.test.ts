import NIMImpl from '../../../src/entry'
import NIM from '../../../src/typings/NIM'

describe('V2NIMMessageServiceImpl', () => {
  let instance: NIM

  beforeAll(async () => {
    instance = NIMImpl.getInstance({ appkey: 'testABC' })
  })

  afterAll(async () => {
    await instance.destroy()
  })

  test('sendMessage', async () => {
    const message = await instance.V2NIMMessageService.sendMessage('123')
    expect(message.body).toBe('123')
  })
})
