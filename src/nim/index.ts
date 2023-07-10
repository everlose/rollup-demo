import MessageServiceImpl from '../services/V2NIMMessageService'
import SessionServiceImpl from '../services/V2NIMSessionService'
import NIM, { NIMInitializeOptions, NIMOtherOptions, NIMServiceName } from '../typings/NIM'

type NIMServiceConstructor = new (core: NIMImpl, options?: any) => void
const serviceMap: {
  [key: string]: NIMServiceConstructor
} = {}

const defaultOptions = {
  appkey: '',
  debugLevel: 'off'
}

export default class NIMImpl implements NIM {
  private static instance: NIM | null = null
  options: NIMInitializeOptions
  otherOptions: NIMOtherOptions
  V2NIMMessageService: MessageServiceImpl = {} as MessageServiceImpl
  V2NIMSessionService: SessionServiceImpl = {} as SessionServiceImpl

  constructor(options: NIMInitializeOptions = defaultOptions, otherOptions: NIMOtherOptions = {}) {
    this.options = options
    this.otherOptions = otherOptions

    NIMImpl.instance = this

    // 初始化各个子模块, 但是 sync 模块需要在最后初始化
    Object.keys(serviceMap).forEach((key) => {
      const serviceFn = serviceMap[key]
      this[key as NIMServiceName] = new serviceFn(this) as never
    })

    // 设置第二个参数
    Object.keys(this.otherOptions).forEach((key) => {
      // 截取 xxConfig 前面的模块名 xx
      const idx = key.indexOf('Config')
      if (idx > -1) {
        const moduleName = key.slice(0, idx)
        // todo: auth 模块特殊处理，v1 和 v2 的都将被设置。
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this[moduleName] && this[moduleName].setOptions && this[moduleName].setOptions(this.otherOptions[key])
      }
    })
  }

  destroy() {
    NIMImpl.instance = null
  }

  static registerService(serviceClass: any): void {
    const serviceName = serviceClass.moduleName
    serviceMap[serviceName] = serviceClass
  }
  static getInstance(options: NIMInitializeOptions, otherOptions?: NIMOtherOptions) {
    if (NIMImpl.instance) {
      return NIMImpl.instance
    }
    return new NIMImpl(options, otherOptions)
  }
}
