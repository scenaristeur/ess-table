<template>
  <div>

    <b-modal id="modal-record"
    @ok="onValidModal">
    <template #modal-title>
      <!-- <EditableSpan v-model="record.name" /> -->
      <Label :url="record.url" :tick="tick" />
      <b-button variant="outline-info" v-b-modal.modal-record-name size="sm">
        <b-icon-pen>
        </b-icon-pen>
      </b-button>
    </template>
    <a :href="record.url" target="_blank">record <b-icon-link45deg></b-icon-link45deg></a>


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

  <b-modal id="modal-record-name" title="Rename" @ok="edit_record_name">
    <b-form-input v-model="record.name" placeholder="Enter the name of the record"></b-form-input>
  </b-modal>
</div>
</template>

<script>
import ldflex from '@solid/query-ldflex/lib/exports/rdflib'
import { namedNode } from "@rdfjs/data-model";
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
//import { v4 as uuidv4 } from 'uuid';
import watermark from 'watermarkjs'


export default {
  name: 'RecordModal',
  components: {
    'Label': () => import('@/components/basic/Label'),
    //  'EditableSpan': () => import('@/components/basic/EditableSpan')
  },
  data() {
    return {
      //records:[],
      //  record:{},
      note: "",
      files: [],
      tick: new Date()
    }
  },
  created(){
    this.record = this.$store.state.table.record
  },
  methods: {
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
      onValidModal(){
        console.log(this.record)
        this.$store.commit('table/setRecordTick', new Date())
      },
      async edit_record_name(){
        console.log(this.record.name, this.record.url)
        await ldflex[this.record.url].label.set(this.record.name)
        //  let path = this.storage+this.privacy+'/table/workspaces/'
        //console.log(path)
        //  this.$store.dispatch('table/getWorkspaces', path)
        this.tick = new Date()
      },
    },
    watch:{
      record(){
        console.log(this.record)
      }
    },
    computed:{
      record: {
        get: function() { return this.$store.state.table.record},
        set: function() {}
      },
      storage: {
        get: function() { return this.$store.state.solid.storage},
        set: function() {}
      },
      privacy: {
        get: function() { return this.$store.state.table.privacy},
        set: function() {}
      },
    }

  }

  </script>

  <style>

  </style>
