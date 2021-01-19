import { FieldType} from 'soukai';

import /*SoukaiSolid,*/ { /*SolidEngine,*/ SolidModel } from 'soukai-solid';

export default class Field extends SolidModel {
  static rdfContexts = {
        'ui': 'http://www.w3.org/ns/ui#'    };

  static rdfsClasses = ['ui:ValueForm'];

  static fields = {
    name: {
        type: FieldType.String,
        rdfProperty: 'rdfs:label',
        required: true,
    },
    type: {
        type: FieldType.String,
        rdfProperty: 'rdfs:type',
    },
    multiple: {
        type: FieldType.Boolean,
        rdfProperty: 'ui:Multiple', // not good it is a class not a predicate
    },

  };

}
