export default interface V2NIMMessageService {
  sendMessage(text: string): Promise<V2NIMMessage>
}

export type V2NIMMessage = {
  idClient: string
  idServer: string
  body: string
}
