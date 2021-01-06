<template>
  <div class="container">
    TABLE
    <EditableSpan v-model="table.name" />
    <b-button pill variant="outline-secondary" @click="add"><b-icon-plus></b-icon-plus> Add a record</b-button>
    Privacy: <b-button @click="togglePrivacy" size="sm" variant="primary">{{ privacy }}</b-button><br>

    <b-table
    hover
    :items="records"
    selectable
    select-mode="single"
    selected-variant="primary"
    @row-selected="onRecordSelected">
  </b-table>

    Storage : {{ storage }}<br>
    Path: {{path}}

    <b-modal id="modal-record"
    @ok="onValidModal">
    <template #modal-title>
      <EditableSpan v-model="record.name" />
    </template>
    <p class="my-4">Hello from modal!</p>
  </b-modal>
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
  name: 'Table',
  components: {
    'EditableSpan': () => import('@/components/basic/EditableSpan'),
  },
  data() {
    return {
      items: [
        { name: 'record1', notes: [], attachements: []},
        { name: 'record2', notes: [], attachements: []},
        { name: 'record3', notes: [], attachements: []},
        { name: 'record4', notes: [], attachements: []},
      ],
      privacy: null,
      records:[],
      record:{}
    }
  },
  created() {
    this.workspace = this.$store.state.table.workspace
    this.base = this.$store.state.table.base
    this.table = this.$store.state.table.table
    console.log(this.workspace)
        this.privacy = 'public'
  },
  methods: {
  async add(){
    //  this.items.unshift({name: 'new record', fields: "?", url: "" })
    let file = this.path+uuidv4()+'.ttl'
    var dateObj = new Date();
    var date = dateObj.toISOString()
    let content = `@prefix : <#>.
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
    @prefix dct: <http://purl.org/dc/terms/>.
    @prefix dbo: <http://dbpedia.org/ontology/>.

    <> rdfs:label "New Record".
    <> rdf:type dbo:Record.
    <> dct:created "${date}".`
    await fc.postFile( file, content, 'text/turtle' )
    console.log(file)
    await ldflex[this.table.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart'].add(namedNode(file))
    await ldflex[file]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf'].add(namedNode(this.table.url))
    this.update()
    },
    async update(){
      this.folder = await fc.readFolder(this.path)
      console.log(this.folder.files)
      this.records = []
      this.folder.files.forEach(async(f) => {
        let name =  await ldflex[f.url].label
        let notes = []
        let attachements = []
        for await (const note of ldflex[f.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasNote']) {
          notes.push(`${note}`)
        }
        for await (const attachement of ldflex[f.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasAttachement']) {
          attachements.push(`${attachement}`)
        }
        console.log("n",notes)
        let record =   {name: `${name}`, notes: notes, attachements: attachements, url:f.url}
        this.records.push(record)
      //  this.workspaces.push(base)
      });
      //console.log(this.workspaces)

    },
    onValidModal(){
      console.log(this.record)
    },
    onRecordSelected(r){
      console.log(r)
      if (r.length > 0){
        this.record = r[0]
        this.$bvModal.show('modal-record')
      }
      //  this.$router.push('Row')
    },
    togglePrivacy(){
      this.privacy = this.privacy == 'public' ? 'private' : 'public'
    }
  },
  computed:{
    table: {
      get: function() { return this.$store.state.table.table},
      set: function() {}
    },
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
      get: function() { return this.storage+this.privacy+'/table/records/'},
      set: function() {}
    }
  }
}
</script>
