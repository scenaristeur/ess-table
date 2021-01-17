import { FieldType } from 'soukai';
import { SolidModel } from 'soukai-solid';

export default class Task extends SolidModel {
  static ldpContainer = true;
  static rdfContexts = {
      'lifecycle': 'http://purl.org/vocab/lifecycle/schema#',
  };

  static rdfsClasses = ['lifecycle:Task'];

  static fields = {
         name: {
             type: FieldType.String,
             rdfProperty: 'rdfs:label',
             required: true,
         },
         description: {
             type: FieldType.String,
             rdfProperty: 'rdfs:comment',
         },
         priority: {
             type: FieldType.Number,
             rdfProperty: 'cal:priority',
         },
         dueAt: {
             type: FieldType.Date,
             rdfProperty: 'cal:due',
         },
         completedAt: {
             type: FieldType.Date,
             rdfProperty: 'cal:completed',
         },
     };

}
