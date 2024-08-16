export type MessageType = "text" | "image" | "audio" | "video";

export interface MessageRequestDTO {
  groupUuid: string;
  clientMessageId: string;
  payload: string;
  messageType: string;
  senderUuid: string;
}

export interface MessageResponseDTO {
  payload: string;
  timestamp: number;
  recipientClientUuid: string;
  messageId: string;
  clientMessageId: string;
  groupUuid: string;
  senderClientUuid: string;
  senderUuid: string;
  messageType: string;
}
