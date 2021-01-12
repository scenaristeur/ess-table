<template>
  <div>
    tableview : {{url}}

    <br>
    {{records}}
    <b-table
    hover
    :items="records"
    selectable
    select-mode="single"
    selected-variant="primary"
    @row-selected="onRecordSelected">
    <template #cell(url)="row">
      <b-button pill variant="outline-primary" size="sm"><a :href="row.item.url" target="_blank"><b-icon-link45deg></b-icon-link45deg></a></b-button>
    </template>
  </b-table>


  <b-modal id="modal-record"
  @ok="onValidModal">
  <template #modal-title>
    <EditableSpan v-model="record.name" />
  </template>


  <b-button pill size="sm" v-b-modal.modal-note><b-icon-plus></b-icon-plus> Add a note</b-button>
  <b-button pill variant="outline-primary" v-b-modal.modal-files size="sm"><b-icon-plus></b-icon-plus> Add images files</b-button>




  <!-- <p class="my-4">Hello from modal!</p> -->

</b-modal>


<b-modal id="modal-note" title="New Note" @ok="addNote">
  <b-form-textarea
  id="textarea"
  v-model="note"
  placeholder="Enter something..."
  rows="3"
  max-rows="6"
  ></b-form-textarea>
</b-modal>

<b-modal id="modal-files" title="Add files" @ok="addFiles">
  <b-form-file multiple
  accept="*"
  v-model="files"
  placeholder="Choose a file or drop it here..."
  drop-placeholder="Drop file here..."
  @input="onInput"
  ></b-form-file>
  <div ref="preview"></div>
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
import watermark from 'watermarkjs'

export default {
  name:"TableView",
  props: ['url'],
  data() {
    return {
      records:[],
      record:{},
      note: "",
      files: []
    }
  },
  created(){
    console.log('URL', this.url)
    //  this.$store.dispatch('table/getRecords', this.url)
    this.getRecords()
  },

  methods: {
    async getRecords(){
      this.records = []
      for await (const record of ldflex[this.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart']) {
        let label = await ldflex[record].label
        this.records.push({label: label, url: `${record}`})
        // for await (const property of record.properties){
        //   console.log(`${property}`);
        // }
      }
    },
    onRecordSelected(r){
      console.log(r)
      if (r.length > 0){
        this.record = r[0]
        this.$bvModal.show('modal-record')
      }
      //  this.$router.push('Row')
    },
    async onInput(files){
      console.log(files)
      let preview = this.$refs.preview
      // let storage = await ldflex.data.user.storage
      // let path = `${storage}`+'public/portfolio/'
      let path = this.storage+this.privacy+'/table/files/'
      await files.forEach(async function(f)  {
        console.log(f)
        watermark([f])
        .image(watermark.text.center(path, '30px Josefin Slab', '#fff', 0.8))
        .then(img => {
          img.name = f.name
          img.type = f.type
          img.width = "100"
          preview.appendChild(img)});
        })
      },
      async addFiles(){
        let record_url = this.record.url
        let preview = this.$refs.preview
        let dataURLtoFile = this.dataURLtoFile
        var images = [].slice.call(preview.children);
        console.log(images)
        // let storage = await ldflex.data.user.storage
        // let path = `${storage}`+'public/portfolio/'
        let path = this.storage+this.privacy+'/table/files/'

        console.log(path)
        try{
          await images.forEach(async function(i)  {
            let uri = path+i.name
            console.log(encodeURI(uri))
            var file = dataURLtoFile(i.src,i.name);
            await fc.createFile(encodeURI(uri), file, i.type)
            await ldflex[record_url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart'].add(namedNode(encodeURI(uri)))

          })
          alert(images.length+" fichiers sauvegardés")
        }catch(e){
          alert(e)
        }
      },
      dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
        while(n--){
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
      },
      async addNote(){
        let note = this.note
        console.log(this.record, note)
        await ldflex[this.record.url]['http://www.w3.org/2004/02/skos/core#note'].add(note)
        this.note = ""
      },
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
          let attachments = []
          for await (const note of ldflex[f.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasNote']) {
            notes.push(`${note}`)
          }
          for await (const attachment of ldflex[f.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasAttachment']) {
            attachments.push(`${attachment}`)
          }
          console.log("n",notes)
          let record =   {name: `${name}`, notes: notes, attachments: attachments, url:f.url}
          this.records.push(record)
          //  this.workspaces.push(base)
        });
        //console.log(this.workspaces)

      },
      onValidModal(){
        console.log(this.record)
      },
    },
    watch:{
      url(){
        console.log("tables URL",this.url)
      }
    }

  }
  </script>

  <style>

  </style>
