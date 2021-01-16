<template>
  <div class="container">

    SOUKAI WS : {{ souk_ws.length}}<br>

    <ul>
      <li v-for="(sws,i) in souk_ws" :key="i">
        {{sws.name}}<br>
        {{sws.createdAt}}<br>
        {{sws.url}}
      </li>
    </ul>

    <b-card
    no-body
    style="min-width: 10rem;"
    class="mb-2">
    <b-card-title tag="h4">Workspaces </b-card-title>
    <b-card-sub-title>Privacy: <b-button pill @click="togglePrivacy" size="sm" variant="primary">{{ privacy }}</b-button><br></b-card-sub-title>

    <b-list-group flush>
      <b-list-group-item
      v-for="w in workspaces"
      :key="w.url"
      button size="sm"
      @click="openWorkspace(w.url)">
      <Label :url="w.url" :tick='tick' />
      <!-- <b-button pill variant="outline-primary" size="sm"><a :href="w.url" target="_blank"><b-icon-link45deg></b-icon-link45deg></a></b-button> -->
    </b-list-group-item>
  </b-list-group>

  <b-button pill variant="outline-secondary" size="sm" @click="add"><b-icon-plus></b-icon-plus> Add a workspace</b-button>

</b-card>

</div>
</template>

<script>

import { FieldType, Soukai} from 'soukai';
import /*SoukaiSolid,*/ { /*SolidContainsRelation,*/ /*SolidEngine,*/ SolidModel } from 'soukai-solid';


class Band extends SolidModel {

  static rdfContexts = {
    'schema': 'https://schema.org/',
  };

  static rdfsClasses = ['MusicGroup'];

  static fields = {
    name: FieldType.String,
  };

  members = [];
   relatedMembers = []
   // (model) {
   //      return new SolidContainsRelation(this, model);
   //  }// [] SolidContainsRelation<Group, Person, typeof Person>;

  membersRelationship() {
    return this.hasMany(Person, 'bandUrl').usingSameDocument(true);
  }

}

class Person extends SolidModel {

  static rdfContexts = {
    'schema': 'https://schema.org/',
  };

  static rdfsClasses = ['Person'];

  static fields = {
    name: FieldType.String,
    bandUrl: {
      type: FieldType.Key,
      rdfProperty: 'schema:memberOf',
    },
  };

}

Soukai.loadModels({ Person, Band });
//import {/*parse,*/ stringify} from 'flatted';
//import {Task/*, TaskList*/} from '@/plugins/models/Task'
// You would normally get the Solid POD url from solid-auth-client,
// we're hard-coding it here as an example.
//import Person from '@plugins/models/Person'

//import { v4 as uuidv4 } from 'uuid';
//import solidMixin from '@/mixins/solidMixin'

export default {
  name: 'Workspace',
  //  mixins: [solidMixin],
  components: {
    'Label': () => import('@/components/basic/Label'),
  },
  data() {
    return {
      tick: new Date(),
      souk_ws: []
    }
  },
  async created() {
    this.workspaces = []
    console.log('##################',this.$myAddedMethod())
    // let task = new Task({name: 'Write some tests!'})
    // task.save()
    // console.log(task.name)
  },

  methods: {
    async add(){
      this.$store.dispatch('table/addWorkspace', {path: this.path, name:"___workspace name___"})
      await this.$createWorkspace("___workspace name___")
      this.testGroup()
    },
    openWorkspace(url){
      this.$store.commit('table/setWorkspace', url)
    },
    // onRowSelected(r){
    //   console.log(r)
    //   this.$store.commit('table/setWorkspace', r[0])
    //   this.$router.push('Workspace')
    // },
    togglePrivacy(){
      this.$store.commit('table/togglePrivacy')
    },
    async getWorkspaces(){
      this.$store.dispatch('table/getWorkspaces', this.storage+this.privacy+'/table/workspaces/')
      // await this.$createPerson()
      // await this.$createPerson("bab")
      // await this.$createPerson("bob")
      //
      // await this.$createWorkspace("A Workspace")
      // await this.$createWorkspace("bob WS")

      let souk_ws = await this.$getWorkspaces(this.storage+this.privacy+'/table/test/workspaces/')
      this.souk_ws = souk_ws.map(x => ({'name' : x.name, 'createdAt': x.createdAt, url: x.url}))
      console.log(this.souk_ws)

    },

    async testGroup(){


      //And here's an example using those models:
const acdc = await Band.create({url: this.storage+this.privacy+'/table/test/bands/ac-dc', name: 'ac-dc'});
    //  const acdc = await Band.find(this.storage+this.privacy+'/table/test/bands/ac-dc');

      // You can create the model yourself, and it'll be stored when the parent is saved.
  //    acdc.relatedMembers.add(new Person({ name: 'Bon Scott' }));

    //  await acdc.save();

      // Or you can use the create method.
      // Notice how we're not specifying the bandUrl in either scenario.
      await acdc.relatedMembers.create({ name: 'Angus Young' });
    }


  },
  watch: {
    privacy(){
      console.log(this.storage+this.privacy, this.storage)
      this.getWorkspaces()
    },
    storage(){
      console.log(this.storage+this.privacy)
      this.getWorkspaces()
    },
    workspaces(){
      console.log("must update workspaces in table", this.workspaces)
      this.tick = new Date()

    }

  },

  computed:{
    workspaces: {
      get: function() { return this.$store.state.table.workspaces},
      set: function() {}
    },
    storage: {
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
    path: {
      get: function() { return this.storage+this.privacy+'/table/workspaces/'},
      set: function() {}
    },
    privacy: {
      get: function() { return this.$store.state.table.privacy},
      set: function() {}
    },
  }
}
</script>
