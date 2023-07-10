import NIMImpl from '../nim'
import V2NIMMessageServiceImpl from '../services/V2NIMMessageService'
import V2NIMSessionServiceImpl from '../services/V2NIMSessionService'

NIMImpl.registerService(V2NIMMessageServiceImpl)
NIMImpl.registerService(V2NIMSessionServiceImpl)

export default NIMImpl
