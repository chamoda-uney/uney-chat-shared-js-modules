import Realm, { ObjectSchema } from 'realm';

export class ApplicationGroup extends Realm.Object<ApplicationGroup> {
  _id!: Realm.BSON.ObjectId;

  name!: string;

  uuid!: Realm.BSON.UUID;

  static schema: ObjectSchema = {
    name: 'ApplicationGroup',
    properties: {
      _id: 'objectId',
      name: 'string',
      uuid: { type: 'uuid', indexed: true },
    },
  };
}
