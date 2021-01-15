import { FieldType} from 'soukai';

import /*SoukaiSolid,*/ { /*SolidEngine,*/ SolidModel } from 'soukai-solid';
//import Storage from '@/utils/Storage';


export default class Workspace extends SolidModel {
  static ldpContainer = true;
  static rdfContexts = {
      'lifecycle': 'http://purl.org/vocab/lifecycle/schema#',
  };

  static rdfsClasses = ['lifecycle:TaskGroup'];

  static fields = {
      name: {
          type: FieldType.String,
          rdfProperty: 'rdfs:label',
          required: true,
      },
  };

  static classFields = ['Base'];

  bases = [];

  activeBase = ""

   setActiveBase(base) {
      this.activeBase = base;

    //  Storage.set('activeBaseUrl', base.url);
  }


}
