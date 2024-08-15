export type MessageType = "text" | "image" | "audio" | "video";

export interface IApplicationGroupDTO {
  name: string;
  uuid: string;
}

export interface IApplicationUserDTO {
  name: string;
  uuid: string;
}

export interface IApplicationMessageDTO {
  version: number;
  localMessageId: string;
  globalMessageId?: string;
  type: MessageType;
  payload: IMessagePayloadDTO;
  timestamp: number;
  applicationUserUuid?: string;
  groupUuid: string;
}

export interface IMessagePayloadDTO {
  text: string;
}
