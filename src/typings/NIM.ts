import V2NIMMessageService from './services/V2NIMMessageService'
import V2NIMSessionService from './services/V2NIMSessionService'

export default interface NIM {
  V2NIMSessionService: V2NIMSessionService
  V2NIMMessageService: V2NIMMessageService

  destroy(): void
}

export interface NIMStatic {
  /**
   * 构造函数
   */
  new (options: NIMInitializeOptions, otherOptions?: NIMOtherOptions): NIM
  /**
   * 单例模式获取实例
   */
  getInstance(options: NIMInitializeOptions, otherOptions?: NIMOtherOptions): NIM
  /**
   * 注册某类
   * @param serviceClass
   */
  registerService(serviceClass: any): void
}

export type NIMServiceName = 'V2NIMMessageService' | 'V2NIMSessionService'

export type NIMInitializeOptions = {
  appkey?: string
  debugLevel?: string
}
export type NIMOtherOptions = {
  sessionConfig?: {
    unreadCountFilterFn?: () => boolean
  }
}
