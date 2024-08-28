import Realm, { ObjectSchema } from "realm";

export class ApplicationUserGroup extends Realm.Object<ApplicationUserGroup> {
  _id!: string;

  _userId!: Realm.BSON.ObjectId;

  _groupId!: Realm.BSON.ObjectId;

  static schema: ObjectSchema = {
    name: "ApplicationUserGroup",
    primaryKey: "_id",

    properties: {
      _id: "string",
      _userId: {
        type: "objectId",
        indexed: true,
      },
      _groupId: {
        type: "objectId",
        indexed: true,
      },
    },
  };
}
