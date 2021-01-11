<template>
  <div class="container">
    Base :       <EditableSpan v-model="base.name" /> / {{base.tables.length}} tables

    <b-button pill variant="outline-secondary" @click="add"><b-icon-plus></b-icon-plus> Add a table</b-button>
    Privacy: <b-button @click="togglePrivacy" size="sm" variant="primary">{{ privacy }}</b-button><br>

    <b-table
    hover
    :items="tables"
    selectable
    select-mode="single"
    selected-variant="primary"
    @row-selected="onRowSelected">
    <template #cell(url)="row">
      <a :href="row.item.url" target="_blank">{{row.item.url.substring(row.item.url.lastIndexOf('/') + 1)}}</a>
    </template>
    <template #cell(records)="row">
      {{row.item.records.length}}
    </template>
  </b-table>

  Storage : {{ storage }}<br>
  Path: {{path}}

</div>
</template>

<script>
import ldflex from '@solid/query-ldflex/lib/exports/rdflib'
import { namedNode } from "@rdfjs/data-model";
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
import { v4 as uuidv4 } from 'uuid';


export default {
  name: 'Base',
  components: {
    'EditableSpan': () => import('@/components/basic/EditableSpan'),
  },
  data() {
    return {
      privacy: null,
      tables:[]
      // items: [
      // { name: 'Table1', rows: 8, fields: "?", url: ""},
      // { name: 'Table2', rows: 3, fields: "?", url: ""},
      // { name: 'Table3', rows: 0, fields: "?", url: ""},
      // { name: 'Table5', rows: 65, fields: "?", url: ""}
      // ]
    }
  },
  created() {
    this.workspace = this.$store.state.table.workspace
    this.base = this.$store.state.table.base
    console.log(this.workspace)
        this.privacy = 'public'
        this.update()
  },
  methods: {
  async add(){
      // this.base.tables.unshift({name: 'new table', rows:[], fields: [], url: "" })
      // this.$store.commit('table/setBase', this.base)
      let file = this.path+uuidv4()+'.ttl'
      var dateObj = new Date();
      var date = dateObj.toISOString()
      let content = `@prefix : <#>.
      @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
      @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
      @prefix dct: <http://purl.org/dc/terms/>.
      @prefix dbo: <http://dbpedia.org/ontology/>.

      <> rdfs:label "New Table".
      <> rdf:type dbo:Table.
      <> dct:created "${date}".`
      await fc.postFile( file, content, 'text/turtle' )
      console.log(file)
      await ldflex[this.base.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart'].add(namedNode(file))
      await ldflex[file]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf'].add(namedNode(this.base.url))
      this.update()
    },
    async update(){
      this.folder = await fc.readFolder(this.path)
      console.log(this.folder.files)
      this.tables = []
      this.folder.files.forEach(async(f) => {
        let name =  await ldflex[f.url].label
        let records = []
        for await (const record of ldflex[f.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart']) {
          records.push(`${record}`)
        }
        console.log("r",records)
        let table =   {name: `${name}`, url:f.url, records:records}
        this.tables.push(table)
      //  this.workspaces.push(base)
      });
      //console.log(this.workspaces)

    },
    onRowSelected(r){
      console.log(r)
      this.$store.commit('table/setTable', r[0])
      this.$router.push('Table')
    },
    togglePrivacy(){
      this.privacy = this.privacy == 'public' ? 'private' : 'public'
    }
  },
  computed:{
    base: {
      get: function() { return this.$store.state.table.base},
      set: function() {}
    },
    workspaces: {
      get: function() { return this.$store.state.table.workspaces},
      set: function() {}
    },
    workspace: {
      get: function() { return this.$store.state.table.workspace},
      set: function() {}
    },
    storage: {
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
    path: {
      get: function() { return this.storage+this.privacy+'/table/tables/'},
      set: function() {}
    }
  }
}
</script>
