import { FieldType} from 'soukai';

import /*SoukaiSolid,*/ { /*SolidEngine,*/ SolidModel } from 'soukai-solid';

export default class Person extends SolidModel {

  static rdfsClasses = ['http://www.w3.org/ns/ui#ValueForm'];

  static fields = {
    name: {
        type: FieldType.String,
        rdfProperty: 'rdfs:label',
        required: true,
    },
  };

}
