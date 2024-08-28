export enum MessageType {
  text = "text",
}

export interface IApplicationMessage {
  id: string;
  content: IMessageContent;
  timestamp?: number;
  sender: IApplicationUser;
  group: IApplicationGroup;
  own: boolean;
  type: MessageType;
}

export interface IApplicationUser {
  id: string;
  name: string;
  uuid: string;
}

export interface IApplicationGroup {
  id: string;
  name: string;
  uuid: string;
}

export interface IMessageContent {
  text: string;
}

export type LatestMessageParams = {
  id: string;
  content: IMessageContent;
  timestamp?: number;
  sender: IApplicationUser;
} | null;

export type GroupWithLatestMessageParams = {
  id: string;
  name: string;
  uuid: string;
  createdAt: number;
  updatedAt: number;
  latestMessage?: LatestMessageParams;
};
