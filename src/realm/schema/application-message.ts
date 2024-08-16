import Realm, { ObjectSchema } from "realm";
import { ApplicationUser } from "./application-user";
import { ApplicationGroup } from "./application-group";

export class ApplicationMessage extends Realm.Object<ApplicationMessage> {
  _id!: Realm.BSON.ObjectId;

  localMessageId!: Realm.BSON.UUID;

  globalMessageId?: Realm.BSON.UUID;

  payload!: string;

  timestamp!: number;

  sender?: ApplicationUser;

  group!: ApplicationGroup;

  static schema: ObjectSchema = {
    name: "ApplicationMessage",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      localMessageId: { type: "uuid", indexed: true },
      globalMessageId: { type: "uuid", indexed: true },
      payload: "string",
      timestamp: "int",
      sender: "ApplicationUser?",
      group: "ApplicationGroup",
    },
  };
}
