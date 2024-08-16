import Realm, { ObjectSchema } from "realm";
import { ApplicationUser } from "./application-user";
import { ApplicationGroup } from "./application-group";
import { MessageType } from "../../messaging";

export class ApplicationMessage extends Realm.Object<ApplicationMessage> {
  _id!: Realm.BSON.ObjectId;

  localMessageId!: Realm.BSON.UUID;

  globalMessageId?: Realm.BSON.UUID;

  payload!: MessagePayload;

  plainText?: string;

  timestamp!: number;

  sender?: ApplicationUser;

  group!: ApplicationGroup;

  type!: MessageType;

  version!: number;

  static schema: ObjectSchema = {
    name: "ApplicationMessage",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      localMessageId: { type: "uuid", indexed: true },
      globalMessageId: { type: "uuid", indexed: true },
      payload: "MessagePayload",
      plainText: {
        type: "string",
        optional: true,
        indexed: "full-text",
      },
      timestamp: "int",
      sender: "ApplicationUser?",
      group: "ApplicationGroup",
      type: { type: "string", indexed: true },
      version: "int",
    },
  };
}

class MessagePayload extends Realm.Object<MessagePayload> {
  text?: string;

  static schema: Realm.ObjectSchema = {
    name: "MessagePayload",
    embedded: true,
    properties: {
      text: "string?",
    },
  };
}
