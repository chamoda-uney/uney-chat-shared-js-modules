import Realm, { ObjectSchema } from "realm";
import { ApplicationMessage } from "./application-message";

export class ApplicationGroup extends Realm.Object<ApplicationGroup> {
  _id!: Realm.BSON.ObjectId;

  name!: string;

  uuid!: string;

  createdAt!: number;

  updatedAt!: number;

  latestMessage?: ApplicationMessage;

  static schema: ObjectSchema = {
    name: "ApplicationGroup",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      uuid: { type: "string", indexed: true },
      createdAt: { type: "int", indexed: true },
      updatedAt: { type: "int", indexed: true },
      latestMessage: "ApplicationMessage?",
    },
  };
}
