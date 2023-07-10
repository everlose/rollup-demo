import Core from '../../nim'
import EventEmitter from 'eventemitter3'
import V2NIMMessageService, { V2NIMMessage } from '../../typings/services/V2NIMMessageService'
import { get } from 'lodash-es'

export default class V2NIMMessageServiceImpl extends EventEmitter implements V2NIMMessageService {
  static moduleName = 'V2NIMMessageService'
  core: Core

  constructor(core: Core) {
    super()
    this.core = core
  }

  async sendMessage(text: string): Promise<V2NIMMessage> {
    const message = await this.sendCmd(text)
    if (get(message, 'idClient')) {
      return message
    } else {
      throw new Error('generate message failed')
    }
  }

  sendCmd(text: string): Promise<V2NIMMessage> {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log('sendCmd success')
        resolve({
          idClient: 'This is a idClient',
          idServer: 'This is a idServer',
          body: text
        })
      }, 1000)
    })
  }
}
