import EventEmitter from 'eventemitter3';
import Core from '../../nim';
import V2NIMSessionService, { V2NIMSession, V2NIMSessionListener } from '../../typings/services/V2NIMSessionService';
export default class V2NIMSessionServiceImpl extends EventEmitter<V2NIMSessionListener> implements V2NIMSessionService {
    static moduleName: string;
    core: Core;
    list: Map<string, V2NIMSession>;
    constructor(core: Core);
    getSession(id: string): V2NIMSession;
    createSession(params: V2NIMSession): V2NIMSession;
    updateSession(id: string, params: Partial<V2NIMSession>): V2NIMSession & Partial<V2NIMSession>;
    deleteSession(id: string): V2NIMSession | void;
}
