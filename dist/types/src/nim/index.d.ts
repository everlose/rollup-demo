import MessageServiceImpl from '../services/V2NIMMessageService';
import SessionServiceImpl from '../services/V2NIMSessionService';
import NIM, { NIMInitializeOptions, NIMOtherOptions } from '../typings/NIM';
export default class NIMImpl implements NIM {
    private static instance;
    options: NIMInitializeOptions;
    otherOptions: NIMOtherOptions;
    V2NIMMessageService: MessageServiceImpl;
    V2NIMSessionService: SessionServiceImpl;
    constructor(options?: NIMInitializeOptions, otherOptions?: NIMOtherOptions);
    destroy(): void;
    static registerService(serviceClass: any): void;
    static getInstance(options: NIMInitializeOptions, otherOptions?: NIMOtherOptions): NIM;
}
