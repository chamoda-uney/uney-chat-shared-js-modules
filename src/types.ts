import { MessageType } from "./messaging";

export type MessageRequestDTO = {
  groupUuid: string;
  clientMessageId: string;
  payload: string;
  messageType: string;
  senderUuid: string;
};

export type MessageResponseDTO = {
  payload: string;
  timestamp: number;
  recipientClientUuid: string;
  messageId: string;
  clientMessageId: string;
  groupUuid: string;
  senderClientUuid: string;
  senderUuid: string;
  messageType: string;
};

export type MessagePayload = {
  text?: string;
  version: number;
  type: MessageType;
};
