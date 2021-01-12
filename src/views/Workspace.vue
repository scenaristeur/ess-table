<template>
  <div class="container">
    Workspace :
      <EditableSpan v-model="workspace.name" /> / {{ workspace.bases.length}} bases

    <b-button pill variant="outline-secondary" @click="add"><b-icon-plus></b-icon-plus> Add a base</b-button>
    Privacy: <b-button @click="togglePrivacy" size="sm" variant="primary">{{ privacy }}</b-button><br>

    <br>
    [ start with template, import a spreadsheet, start from scratch]
    <!-- https://support.airtable.com/hc/en-us/articles/360021518753#template -->
    <b-table
    hover
    :items="bases"
    selectable
    select-mode="single"
    selected-variant="primary"
    @row-selected="onRowSelected">
    <template #cell(url)="row">
      <b-button pill variant="outline-primary" size="sm"><a :href="row.item.url" target="_blank"><b-icon-link45deg></b-icon-link45deg></a></b-button>
    </template>
    <template #cell(tables)="row">
      {{row.item.tables.length}}
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
  name: 'Workspace',
  components: {
    'EditableSpan': () => import('@/components/basic/EditableSpan'),
  },
  data() {
    return {
      privacy: null,
      bases:[]
    //  workspace: {},
      // items: [
      //   { name: 'Base1', tables: 8, url: ""},
      //   { name: 'Base2', tables: 3, url: ""},
      //   { name: 'Base3', tables: 0, url: ""},
      //   { name: 'Base5', tables: 65, url: ""}
      // ]
    }
  },
  created() {
    this.workspace = this.$store.state.table.workspace
    console.log(this.workspace)
        this.privacy = 'public'
  },
  methods: {
  async add(){
    //  this.workspace.bases.unshift({name: 'new base', tables:[], url: "" })
    //  this.$store.commit('table/setWorkspaces', this.workspaces)
      let file = this.path+uuidv4()+'.ttl'
      var dateObj = new Date();
      var date = dateObj.toISOString()
      let content = `@prefix : <#>.
      @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
      @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
      @prefix dct: <http://purl.org/dc/terms/>.
      @prefix dbo: <http://dbpedia.org/ontology/>.

      <> rdfs:label "New Database".
      <> rdf:type dbo:DataBase.
      <> dct:created "${date}".`
      await fc.postFile( file, content, 'text/turtle' )
      console.log(file)
      await ldflex[this.workspace.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart'].add(namedNode(file))
      await ldflex[file]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf'].add(namedNode(this.workspace.url))
      this.update()
    },
    async update(){
      this.folder = await fc.readFolder(this.path)
      console.log(this.folder.files)
      this.bases = []
      this.folder.files.forEach(async(f) => {
        let name =  await ldflex[f.url].label
        let tables = []
        for await (const table of ldflex[f.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart']) {
          tables.push(`${table}`)
        }
        console.log("t",tables)
        let base =   {name: `${name}`, tables:tables, url:f.url}
        this.bases.push(base)
      //  this.workspaces.push(base)
      });
      //console.log(this.workspaces)

    },
    onRowSelected(r){
      console.log(r)
      this.$store.commit('table/setBase', r[0])
      this.$router.push('Base')
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
    workspace: {
      get: function() { return this.$store.state.table.workspace},
      set: function() {}
    },
    storage: {
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
    path: {
      get: function() { return this.storage+this.privacy+'/table/bases/'},
      set: function() {}
    }
  }
}
</script>
