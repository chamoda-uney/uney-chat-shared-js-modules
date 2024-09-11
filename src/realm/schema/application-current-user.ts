import Realm, { ObjectSchema } from "realm";

export class ApplicationCurrentUser extends Realm.Object<ApplicationCurrentUser> {
  _id!: Realm.BSON.ObjectId;

  name!: string;

  uuid!: string;

  static schema: ObjectSchema = {
    name: "ApplicationCurrentUser",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      uuid: { type: "string", indexed: true },
    },
  };
}
