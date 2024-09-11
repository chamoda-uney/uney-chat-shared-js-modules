import Realm, { ObjectSchema } from "realm";

export class ApplicationSecrets extends Realm.Object<ApplicationSecrets> {
  _id!: Realm.BSON.ObjectId;

  refreshToken!: string;

  accessToken!: string;

  pin?: string;

  static schema: ObjectSchema = {
    name: "ApplicationSecrets",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      refreshToken: "string",
      accessToken: "string",
      pin: "string?",
    },
  };
}
