<template>
  <b-container fluid class="p-0">
    <b-button pill variant="outline-primary" size="sm" @click="add">Add Record</b-button>

    <b-table
    hover
    :ref='url'
    :items="records"
    :fields="fields"
    sticky-header="true"
    responsive
    selectable
    select-mode="single"
    selected-variant="primary"
    @row-selected="onRecordSelected">
    <template #cell(url)="row">
      <b-button pill variant="outline-primary" size="sm"><a :href="row.item.url" target="_blank"><b-icon-link45deg></b-icon-link45deg></a></b-button>
    </template>
  </b-table>

  <a :href="url" target="_blank">table <b-icon-link45deg></b-icon-link45deg></a>

</b-container>
</template>

<script>
import ldflex from '@solid/query-ldflex/lib/exports/rdflib'
import { namedNode } from "@rdfjs/data-model";
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
import { v4 as uuidv4 } from 'uuid';


export default {
  name:"TableView",
  props: ['url', 'fields'],

  data() {
    return {
      records:[],
      special_preds:['label', 'url', 'notes', 'attachments'],
      default_fields: [
        {
          key: 'label',
          sortable: true,
          modifiable: false,
          stickyColumn: true,
          isRowHeader: true,
          variant: 'primary'
        },
        {
          key: 'notes',
          //  label: 'Person age',
          sortable: true,
          modifiable: false
        },
        {
          key: 'attachments',
          modifiable: false,
          variant: 'secondary'
        },
        // {
        //   key: '+',
        //   modifiable: false
        // },
        {
          key: 'url',
          modifiable: false,
          variant: 'secondary'
        },
      ],
      // record:{},
      // note: "",
      // files: []
    }
  },
  created(){
    //    console.log('URL', this.url)
    //  this.$store.dispatch('table/getRecords', this.url)
    this.getRecords()
  },

  methods: {
    async getRecords(){
      this.records = []
      console.log("url",this.url)
      let string_fields = await ldflex[this.url]['https://www.w3.org/ns/ui#FieldList']
      console.log("SF",string_fields)
      let table_fields = string_fields == undefined ? this.default_fields : JSON.parse(string_fields)
      console.error(table_fields)
    //  this.fields = table_fields

      for await (const record of ldflex[this.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart']) {
        let label = await ldflex[record].label
        let notes = []
        let attachments = []
        for await (const note of ldflex[record]['http://www.w3.org/2004/02/skos/core#note']) {
          notes.push(`${note}`)
        }
        for await (const attachment of ldflex[record]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart']) {
          attachments.push(`${attachment}`)
        }
        let rec = {label: label, url: `${record}`, notes: notes, attachments: attachments}
    //    console.log('Fields', this.fields)
      //  let special_preds = this.special_preds

        this.fields.forEach(async function(f) {
          console.warn("KEY",f.key)
          for (const [key, value] of Object.entries(f)) {
console.log( key, value)
          //   if (!special_preds.includes(key)){
          //     console.log(key, typeof value, value)
          //     let val = ""
          //     switch (typeof value) {
          //       case 'string':
          //       case 'boolean':
          //       val = await ldflex[record][record+"#"+value]
          //       console.log(val)
          //       break;
          //       default:
          //       console.log("todo",typeof value)
          //     }
          // //    rec[key] = `${val}`
          //
          //   }else{
          //     console.log("already treated",key, typeof value, value)
          //   }
            //  console.log(key+'->'+value)
          }
        });
        console.warn(rec)
        this.records.push(rec)
        // for await (const property of record.properties){
        //   console.log(`${property}`);
        // }
      }
    },
    onRecordSelected(r){
      //  console.log(r)
      if (r.length > 0){
        this.record = r[0]
        console.log(this.record)
        this.$store.commit('table/setRecord', this.record)
        //  this.$store.commit('table/setFields', this.fields)
        this.$bvModal.show('modal-record')
      }
      //  this.$router.push('Row')
    },

    async add(){
      //  this.items.unshift({name: 'new record', fields: "?", url: "" })
      let file = this.storage+this.privacy+'/table/records/'+uuidv4()+'.ttl'
      var dateObj = new Date();
      var date = dateObj.toISOString()
      let content = `@prefix : <#>.
      @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
      @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
      @prefix dct: <http://purl.org/dc/terms/>.
      @prefix dbo: <http://dbpedia.org/ontology/>.

      <> rdfs:label "__New Record__".
      <> rdf:type dbo:Record.
      <> dct:created "${date}".`
      await fc.postFile( file, content, 'text/turtle' )
      console.log(file, this.url)
      await ldflex[this.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart'].add(namedNode(file))
      await ldflex[file]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf'].add(namedNode(this.url))
      //  this.update()
      this.getRecords()
    },
    // async update(){
    //   this.folder = await fc.readFolder(this.path)
    //   console.log(this.folder.files)
    //   this.records = []
    //   this.folder.files.forEach(async(f) => {
    //     let name =  await ldflex[f.url].label
    //     let notes = []
    //     let attachments = []
    //     for await (const note of ldflex[f.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasNote']) {
    //       notes.push(`${note}`)
    //     }
    //     for await (const attachment of ldflex[f.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasAttachment']) {
    //       attachments.push(`${attachment}`)
    //     }
    //     console.log("n",notes)
    //     let record =   {name: `${name}`, notes: notes, attachments: attachments, url:f.url}
    //     this.records.push(record)
    //     //  this.workspaces.push(base)
    //   });
    //   //console.log(this.workspaces)
    // },

  },
  watch:{
    url(){
      console.log("tables URL",this.url)
    },
    recordTick(){
      //  console.log('RECORDTICK',this.recordTick)
      //  console.log(this.$refs[this.url])
      this.getRecords()
      //    this.$refs[this.url].refresh()
      //  this.tick = this.recordTick
    }
  },
  computed:{
    storage: {
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
    privacy: {
      get: function() { return this.$store.state.table.privacy},
      set: function() {}
    },
    recordTick: {
      get: function() { return this.$store.state.table.recordTick},
      set: function() {}
    },
  }

}
</script>

<style>

</style>
