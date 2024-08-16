export interface IApplicationMessage {
  localMessageId: string;
  globalMessageId?: string;
  payload: IMessagePayload;
  timestamp?: number;
  sender: IApplicationUser;
  group: IApplicationGroup;
}

export interface IApplicationUser {
  name: string;
  uuid: string;
}

export interface IApplicationGroup {
  name: string;
  uuid: string;
}

export interface IMessagePayload {
  text: string;
}
