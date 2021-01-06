<template>
  <div class="container">
    Workspaces

    <b-button pill variant="outline-secondary" @click="add"><b-icon-plus></b-icon-plus> Add a workspace</b-button>
    Privacy: <b-button @click="togglePrivacy" size="sm" variant="primary">{{ privacy }}</b-button><br>

    <b-table
    hover
    :items="workspaces"
    selectable
    select-mode="single"
    selected-variant="primary"
    @row-selected="onRowSelected">
    <template #cell(bases)="row">
      {{row.item.bases.length}}
    </template>


  </b-table>

  Storage : {{ storage }}<br>
  Path: {{path}}

</div>
</template>

<script>
// let ldflex = window.solid
// @prefix terms: <http://purl.org/dc/terms/>.
// @prefix c: </profile/card#>.
// @prefix ldp: <http://www.w3.org/ns/ldp#>.
// @prefix org: <http://www.w3.org/ns/org#>.
// @prefix sp: <http://www.w3.org/ns/pim/space#>.
// @prefix n0: <http://xmlns.com/foaf/0.1/>.
// @prefix dct: <http://purl.org/dc/terms/>.
import ldflex from '@solid/query-ldflex/lib/exports/rdflib'

import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'Workspaces',
  data() {
    return {
      privacy: null,

    }
  },
  created() {
    this.workspaces = []
    this.privacy = 'public'
    //do something after creating vue instance
    //  this.path = this.$store.state.solid.storage+this.privacy+'/table/workspaces/'
  },
  methods: {
    async add(){
    //  this.workspaces.unshift({name: 'new workspace', bases:[], url: "" })
    //  this.$store.commit('table/setWorkspaces', this.workspaces)
      let file = this.path+uuidv4()+'.ttl'
      var dateObj = new Date();
      var date = dateObj.toISOString()
      let content = `@prefix : <#>.
      @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
      @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
      @prefix dct: <http://purl.org/dc/terms/>.
      @prefix dbo: <http://dbpedia.org/ontology/>.

      <> rdfs:label "New Workspace".
      <> rdf:type dbo:Workspace.
      <> dct:created "${date}".`
      await fc.postFile( file, content, 'text/turtle' )
      console.log(file)
      this.update()
    },
    async update(){
      this.folder = await fc.readFolder(this.path)
      console.log(this.folder.files)
      this.workspaces = []
      this.folder.files.forEach(async(f) => {
        let name =  await ldflex[f.url].label
        let bases = []
        for await (const base of ldflex[f.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart']) {

          bases.push(`${base}`)
        }
        console.log("b",bases)
        let ws =   {name: `${name}`, url:f.url, bases:bases}
        this.workspaces.push(ws)
      });
      console.log(this.workspaces)

    },
    onRowSelected(r){
      console.log(r)
      this.$store.commit('table/setWorkspace', r[0])
      this.$router.push('Workspace')
    },
    togglePrivacy(){
      this.privacy = this.privacy == 'public' ? 'private' : 'public'
    }
  },
  watch: {
    async path () {
      if (this.privacy != null && this.storage != null){
        if (! await fc.itemExists( this.path )){
          await fc.createFolder(this.path)
        }
        await this.update()
      }
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
    }
  }
}
</script>
