import Realm, { ObjectSchema } from "realm";
import { ApplicationUser } from "./application-user";
import { ApplicationGroup } from "./application-group";
import { MessageType } from "../../messaging";

export class ApplicationMessage extends Realm.Object<ApplicationMessage> {
  _id!: Realm.BSON.ObjectId;

  localMessageId!: string;

  globalMessageId?: string;

  plainText?: string;

  timestamp!: number;

  sender?: ApplicationUser;

  group!: ApplicationGroup;

  groupId!: Realm.BSON.ObjectId;

  type!: MessageType;

  version!: number;

  static schema: ObjectSchema = {
    name: "ApplicationMessage",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      localMessageId: { type: "string", indexed: true },
      globalMessageId: { type: "string", indexed: true, optional: true },
      plainText: {
        type: "string",
        optional: true,
        indexed: "full-text",
      },
      timestamp: "int",
      sender: "ApplicationUser?",
      group: "ApplicationGroup",
      groupId: { type: "objectId", indexed: true },
      type: { type: "string", indexed: true },
      version: "int",
    },
  };
}
