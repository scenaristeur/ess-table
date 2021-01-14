import { FieldType, MultiModelRelation } from 'soukai';

import { SolidContainerModel, SolidContainsRelation } from 'soukai-solid';

import Person from '@/models/Person';

export default class Group extends SolidContainerModel {

  static timestamps = false;

  static rdfContexts = {
    'foaf': 'http://xmlns.com/foaf/0.1/',
  };

  static rdfsClasses = ['foaf:Group'];

  static fields = {
    name: FieldType.String,
  };

  members: Person[];
  relatedMembers: SolidContainsRelation<Group, Person, typeof Person>;

  membersRelationship(): MultiModelRelation {
    return this.contains(Person);
  }

}
