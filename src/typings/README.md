NIM SDK

- [NIM](interfaces/NIM.default.html) 是 SDK 的基类
- [V2NIMSessionService](interfaces/services_V2NIMSessionService.default.html) 挂载了会话模块
- [services/V2NIMMessageService](interfaces/services_V2NIMMessageService.default.html) 挂载了消息模块

## NIMStatic 对象

类的静态方法见 [NIMStatic](interfaces/NIM.NIMStatic.html)

| 方法                                                                                | 功能描述         |
| ----------------------------------------------------------------------------------- | ---------------- |
| [NIMInterfaceStatic.getInstance](interfaces/NIM.NIMStatic.html#getInstance)         | 单例模式获取实例 |
| [NIMInterfaceStatic.registerService](interfaces/NIM.NIMStatic.html#registerService) | 注册模块.        |

## V2NIMSessionService 会话

会话能力见 [V2NIMSessionService](interfaces/services_V2NIMSessionService.default.html)

| 方法                                                                                                    | 功能描述 |
| ------------------------------------------------------------------------------------------------------- | -------- |
| [V2NIMSessionService.getSession](interfaces/services_V2NIMSessionService.default.html#getSession)       | 获取会话 |
| [V2NIMSessionService.updateSession](interfaces/services_V2NIMSessionService.default.html#updateSession) | 更新模块 |

## V2NIMMessageService 消息

会话能力见 [V2NIMMessageService](interfaces/services_V2NIMMessageService.default.html)

| 方法                                                                                                | 功能描述 |
| --------------------------------------------------------------------------------------------------- | -------- |
| [V2NIMMessageService.sendMessage](interfaces/services_V2NIMMessageService.default.html#sendMessage) | 发送消息 |
