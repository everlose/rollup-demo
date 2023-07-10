import { V2NIMMessage } from './V2NIMMessageService';
export default interface V2NIMSessionService {
    /**
     * 获取 session
     * @param id session id
     */
    getSession(id: string): V2NIMSession;
    /**
     * 创建 session
     * @param params 创建参数
     */
    createSession(params: V2NIMSession): V2NIMSession;
    /**
     * 更新 session
     * @param id session id
     * @param params 更新参数
     */
    updateSession(id: string, params: Partial<V2NIMSession>): V2NIMSession;
    /**
     * 删除 session
     * @param id session id
     */
    deleteSession(id: string): V2NIMSession | void;
}
export type V2NIMSession = {
    sessionId: string;
    avatar?: string;
    lastMessage?: V2NIMMessage;
    unread?: number;
};
export interface V2NIMSessionListener {
    update: [result: V2NIMSession];
}
