import NIMImpl from '../../../src/entry'
import NIM from '../../../src/typings/NIM'

describe('V2NIMSessionServiceImpl', () => {
  let instance: NIM

  beforeAll(async () => {
    instance = NIMImpl.getInstance({ appkey: 'testABC' })
  })

  afterAll(async () => {
    await instance.destroy()
  })

  test('createSession', async () => {
    const session = await instance.V2NIMSessionService.createSession({
      sessionId: 'p2p-cs1',
      unread: 5
    })
    expect(session.unread).toBe(5)
  })

  test('getSession', async () => {
    const session = await instance.V2NIMSessionService.getSession('p2p-cs1')
    expect(session.unread).toBe(5)
  })
})
