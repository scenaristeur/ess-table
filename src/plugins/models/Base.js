import { FieldType} from 'soukai';

import /*SoukaiSolid,*/ { /*SolidEngine,*/ SolidModel } from 'soukai-solid';

export default class Person extends SolidModel {

  static rdfsClasses = ['http://xmlns.com/foaf/0.1/Person'];

  static fields = {
    name: {
      type: FieldType.String,
      rdfProperty: 'http://xmlns.com/foaf/0.1/name',
    },
  };

}
