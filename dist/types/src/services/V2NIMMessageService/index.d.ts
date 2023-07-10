import Core from '../../nim';
import EventEmitter from 'eventemitter3';
import V2NIMMessageService, { V2NIMMessage } from '../../typings/services/V2NIMMessageService';
export default class V2NIMMessageServiceImpl extends EventEmitter implements V2NIMMessageService {
    static moduleName: string;
    core: Core;
    constructor(core: Core);
    sendMessage(text: string): Promise<V2NIMMessage>;
    sendCmd(text: string): Promise<V2NIMMessage>;
}
