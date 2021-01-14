<template>
  <div class="container">
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
import SoukaiSolid, { SolidEngine, SolidModel } from 'soukai-solid';
import SolidAuthClient from 'solid-auth-client';
import { FieldType, Soukai} from 'soukai';
//import Person from '@/models/Person'

class Person extends SolidModel {

  static rdfsClasses = ['http://xmlns.com/foaf/0.1/Person'];

  static fields = {
    name: {
      type: FieldType.String,
      rdfProperty: 'http://xmlns.com/foaf/0.1/name',
    },
  };

}

SoukaiSolid.loadSolidModels();
Soukai.loadModels({ Person });
Soukai.useEngine(new SolidEngine(SolidAuthClient.fetch.bind(SolidAuthClient)));

// You would normally get the Solid POD url from solid-auth-client,
// we're hard-coding it here as an example.
let containerUrl = "https://spoggy-test5.solidcommunity.net/public/table/persons/"

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
      tick: new Date()
    }
  },
  created() {
    this.workspaces = []
    console.log('##################',this.$myAddedMethod())
    Person.at(containerUrl).create({ name: 'John Doe' });
  },
  async mounted(){
    const container = await Person.from(containerUrl);
    console.log("Container", container)
    const persons = await Person.from(containerUrl).all();
    console.log("Persons", persons)
    persons.forEach((p) => {
      console.log("NAme",p.name)
    });

  },
  methods: {
    async add(){
      this.$store.dispatch('table/addWorkspace', {path: this.path, name:"___workspace name___"})
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
    getWorkspaces(){
      this.$store.dispatch('table/getWorkspaces', this.storage+this.privacy+'/table/workspaces/')

    },


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
