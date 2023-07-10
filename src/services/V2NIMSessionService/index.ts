import EventEmitter from 'eventemitter3'
import Core from '../../nim'
import V2NIMSessionService, { V2NIMSession, V2NIMSessionListener } from '../../typings/services/V2NIMSessionService'

export default class V2NIMSessionServiceImpl extends EventEmitter<V2NIMSessionListener> implements V2NIMSessionService {
  static moduleName = 'V2NIMSessionService'
  core: Core
  list: Map<string, V2NIMSession> = new Map()

  constructor(core: Core) {
    super()
    this.core = core
  }

  getSession(id: string) {
    const session = this.list.get(id)
    if (!session) {
      throw new Error(`can not get ${id}`)
    }
    return session
  }

  createSession(params: V2NIMSession): V2NIMSession {
    const id = params.sessionId
    const session = this.list.get(id)
    if (session) {
      throw new Error(`can not create ${id}`)
    }
    this.list.set(id, params)
    return params
  }

  updateSession(id: string, params: Partial<V2NIMSession>) {
    const session = this.list.get(id)
    if (!session) {
      throw new Error(`can update ${id}`)
    }
    const newSession = Object.assign(session, params)
    this.list.set(id, newSession)
    this.emit('update', newSession)
    return newSession
  }

  deleteSession(id: string): V2NIMSession | void {
    const session = this.list.get(id)
    this.list.delete(id)
    return session
  }
}
