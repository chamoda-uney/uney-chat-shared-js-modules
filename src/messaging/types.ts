export enum MessageType {
  text = "text",
}

export type IApplicationMessage = {
  id: string;
  content: IMessageContent;
  timestamp?: number;
  sender: IApplicationUser;
  group: IApplicationGroup;
  own: boolean;
  type: MessageType;
};

export type IApplicationUser = {
  id: string;
  name: string;
  uuid: string;
};

export type CurrentUserParams = {
  id: string;
  uuid: string;
  name: string;
};

export type IApplicationGroup = {
  id: string;
  name: string;
  uuid: string;
};

export type IMessageContent = {
  text: string;
};

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
  latestMessage: LatestMessageParams;
};

export type CreateGroupAndAddUsersParams = {
  name: string;
  userIds: string[];
};
