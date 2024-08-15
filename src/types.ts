export type MessageType = "text" | "image" | "audio" | "video";

export interface IApplicationGroup {
  name: string;
  uuid: string;
}

export interface IApplicationUser {
  name: string;
  uuid: string;
}

export interface IApplicationMessage {
  version: number;
  localMessageId: string;
  globalMessageId?: string;
  type: MessageType;
  payload: string;
  timestamp: number;
  applicationUser?: IApplicationUser;
  group: IApplicationGroup;
}

export interface IMessagePayload {
  text: string;
}
