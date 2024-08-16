import { MessagePayload } from "../types";
import { MessageType } from "./types";

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
