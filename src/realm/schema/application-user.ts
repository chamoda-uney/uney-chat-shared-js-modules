import Realm, { ObjectSchema } from 'realm';

export class ApplicationUser extends Realm.Object<ApplicationUser> {
  _id!: Realm.BSON.ObjectId;

  name!: string;

  uuid!: Realm.BSON.UUID;

  static schema: ObjectSchema = {
    name: 'ApplicationUser',
    properties: {
      _id: 'objectId',
      name: 'string',
      uuid: { type: 'uuid', indexed: true },
    },
  };
}
