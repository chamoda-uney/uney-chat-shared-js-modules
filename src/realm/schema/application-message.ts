import Realm, { ObjectSchema } from "realm";
import { ApplicationUser } from "./application-user";

export class ApplicationMessage extends Realm.Object<ApplicationMessage> {
  _id!: Realm.BSON.ObjectId;

  localMessageId!: Realm.BSON.UUID;

  globalMessageId?: Realm.BSON.UUID;

  payload!: string;

  timestamp?: number;

  applicationUser?: ApplicationUser;

  static schema: ObjectSchema = {
    name: "ApplicationMessage",
    properties: {
      _id: "objectId",
      localMessageId: { type: "uuid", indexed: true },
      globalMessageId: { type: "uuid", indexed: true },
      payload: "string",
      timestamp: "int",
      applicationUser: "ApplicationUser?",
    },
  };
}
