import { ApplicationMessage } from "../realm/schema/application-message";
import { MessagePayload } from "../types";
import { IApplicationMessage, MessageType } from "./types";

export * from "./types";

const MESSAGE_VERSION = 1;

//currently we use only text
export const composeMessagePayload = (text: string): string => {
  const payload: MessagePayload = {
    text,
    version: MESSAGE_VERSION,
    type: MessageType.text,
  };
  return JSON.stringify(payload);
};

export const decomposeMessagePayload = (payload: string): MessagePayload => {
  return JSON.parse(payload) as MessagePayload;
};

export const convertToIApplicationMessage = (
  message: ApplicationMessage,
  ownUserUuid: string
): IApplicationMessage => {
  return {
    id: message._id.toString(),
    content: {
      text: message.plainText!, // for now
    },
    timestamp: message.timestamp,
    sender: {
      name: message.sender!.name,
      uuid: message.sender!.uuid.toString(),
    },
    group: {
      name: message.group.name,
      uuid: message.group.uuid.toString(),
    },
    own: message.sender!.uuid.toString() === ownUserUuid,
    type: message.type,
  };
};
