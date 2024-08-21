import Realm, { ObjectSchema } from "realm";

export class ApplicationGroup extends Realm.Object<ApplicationGroup> {
  _id!: Realm.BSON.ObjectId;

  name!: string;

  uuid!: string;

  static schema: ObjectSchema = {
    name: "ApplicationGroup",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      uuid: { type: "string", indexed: true },
    },
  };
}
