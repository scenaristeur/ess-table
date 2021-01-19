<template>
  <b-container fluid>
    <h2>{{name}}
      <b-button variant="outline-info" v-b-modal.modal-base size="sm">
        <b-icon-pen>
        </b-icon-pen>
      </b-button>
      <ForkButton :url="base" />
    </h2>
    <a :href="base" target="_blank">base <b-icon-link45deg></b-icon-link45deg></a> |
    <a :href="'https://scenaristeur.github.io/spoggy-simple/?source='+base" target="_blank">base graphe <b-icon-gear-wide-connected></b-icon-gear-wide-connected></a>


    <b-card no-body>
      <b-tabs card
      @input="tabChanged">
      <!-- Render Tabs, supply a unique `key` to each tab -->
      <b-tab v-for="(t,i) in tables" :key="'dyn-tab-' + i" class="p-0">
        <template #title>
          <small><Label :url="t" :tick='tick' />
            <b-button variant="outline-info" v-b-modal.modal-table size="sm" class="ml-2" @click="setTableName(t)">
              <b-icon-pen btn>
              </b-icon-pen>
            </b-button>


          </small>
        </template>
          <b-button pill variant="outline-primary" size="sm" @click="newField">Add a Field</b-button>
        <b-button pill variant="outline-primary" size="sm" v-b-modal.modal-fields>Edit Fields</b-button>

        <TableView :url="t" :fields="fields" :default_fields="default_fields" />
        <!-- ProjetIOIOI {{ t }} -->

        <!-- <b-button size="sm" variant="danger" class="float-right" @click="closeProjet(p)">
        Close projet
      </b-button> -->
    </b-tab>

    <!-- New Tab Button (Using tabs-end slot) -->
    <template #tabs-end>
      <b-nav-item role="presentation" @click.prevent="addTable" href="#"><b>+</b></b-nav-item>
    </template>

    <!-- Render this if no tabs -->
    <template #empty>
      <div class="text-center text-muted">
        There is no Table for this Base<br>
        Add a new one with the <b>+</b> button.
      </div>
    </template>
  </b-tabs>
</b-card>

<hr>
Fields : {{ fields }}
<hr>
<!-- <b-tabs content-class="mt-3">

<b-tab title="i" v-for="(t,i) in tables" :key="i" :active="i == 0">
<TableView :url="t"/>
</b-tab>
<b-tab title="First"><p>I'm the first tab</p></b-tab>
<b-tab title="Add a table"><p>I'm the second tab</p></b-tab>
</b-tabs> -->

<!-- {{tables}} -->

<b-modal id="modal-base" title="Rename" @ok="edit_base_name">
  <b-form-input v-model="name" placeholder="Enter the name of the base"></b-form-input>
</b-modal>

<b-modal id="modal-table" title="Rename" @ok="edit_table_name">
  <b-form-input v-model="table_name" placeholder="Enter the name of the table"></b-form-input>
</b-modal>

<b-modal id="modal-fields" title="Fields" @ok="edit_fields">

  <div class="accordion" role="tablist">
    <div v-for="(field, index) in fields" :key='index'>
      <b-card no-body class="mb-1" v-if='field.modifiable != false'>

        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="'accordion-'+index" variant="info">{{field.key}}</b-button>
        </b-card-header>
        <b-collapse v-bind:id="'accordion-'+index" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <b-input-group prepend="key">
                <b-form-input v-model="field.key"></b-form-input>
              </b-input-group>
              <b-input-group prepend="type">
                <b-form-select v-model="field.type" :options="field_types">
                  <!-- <template #first>
                  <b-form-select-option value="slt">Single Line Text</b-form-select-option>
                </template> -->
              </b-form-select>
            </b-input-group>
            <b-form-checkbox v-model="field.multiple">Multiple</b-form-checkbox>
            <b-input-group prepend="default value">
              <b-form-input v-model="field.default"></b-form-input>
            </b-input-group>
            {{ field }}
            <b-button variant="danger" @click="remove(field)">Remove</b-button>
          </b-card-text>
        </b-card-body>
      </b-collapse>

    </b-card>
  </div>
</div>



<!-- <b-form-input v-model="" placeholder="Enter the name of the record"></b-form-input> -->
</b-modal>

<RecordModal :fields="fields"/>

</b-container>
</template>

<script>
import ldflex from '@solid/query-ldflex/lib/exports/rdflib'

export default {
  name: 'TablesView',
  components: {
    'TableView': () => import('@/views/TableView'),
    'Label': () => import('@/components/basic/Label'),
    'RecordModal': () => import('@/views/RecordModal'),
    'ForkButton': () => import('@/components/basic/ForkButton')
  },
  data() {
    return {
      name: "",
      table_name:"",
      tick: new Date(),
      field_types: [
        { value: 'text', text: 'Text' },
        { value: 'number', text: 'Number' },
        { value: 'link', text: 'Link to another Record or Resource' },
        { value: 'email', text: 'Email' },
        { value: 'password', text: 'Password' },
        { value: 'checkbox', text: 'Checkbox' },
      //  { value: 'url', text: 'Url' },
        { value: 'tel', text: 'Telephone' },
        { value: 'date', text: 'Date' },
        { value: 'time', text: 'Time' },
        { value: 'range', text: 'Range' },
        { value: 'color', text: 'Color' },
        { value: 'location', text: 'Location' },
        { value: 'select', text: 'Select' },
      ],
      default_fields: [
        {
          key: 'label',
        //  sortable: true,
          modifiable: false,
          stickyColumn: true,
          isRowHeader: true,
          variant: 'primary'
        },
        {
          key: 'notes',
          //  label: 'Person age',
          //sortable: true,
        //  modifiable: true
        },
        {
          key: 'attachments',
          //modifiable: true,
        //  variant: 'secondary'
        },
        // {
        //   key: '+',
        //   modifiable: false
        // },
        {
          key: 'url',
          modifiable: false,
        //  variant: 'secondary'
        },
      //  'new_field'
      ],
      fields:[]
    }
  },
  async created() {
    //do something after creating vue instance
    let name =  await ldflex[this.base].label
    this.name = `${name}`
  },
  methods: {
    newField(){
      this.fields.push({key:'new field'})
    },
    remove(f){
      console.log(f)
      this.fields = this.fields.filter(function( field ) {
        return field.key !== f.key;
      });
    },
    async  tabChanged(t){
      console.log("TAB CHANGED", t)
      console.log(this.tables[t])
      this.table = this.tables[t]
      console.log(this.table)
      let string_fields = await ldflex[this.table]['https://www.w3.org/ns/ui#FieldList']
      let table_fields = string_fields == undefined ? this.default_fields : JSON.parse(string_fields)
      console.log(table_fields)
      this.fields = table_fields
    },
    async edit_fields(){
      //
      console.log("fields", this.fields)
      console.log(this.table)

      await ldflex[this.table]['https://www.w3.org/ns/ui#FieldList'].set(JSON.stringify(this.fields))
    },
    async edit_base_name(){
      //  console.log(this.name)
      await ldflex[this.base].label.set(this.name)
      //  let path = this.storage+this.privacy+'/table/workspaces/'
      //console.log(path)
      //  this.$store.dispatch('table/getWorkspaces', path)

    },
    async edit_table_name(){
      //  console.log(this.table_name)
      await ldflex[this.table].label.set(this.table_name)
      this.$store.dispatch('table/getTables')

      //  let path = this.storage+this.privacy+'/table/workspaces/'
      //console.log(path)
      //  this.$store.dispatch('table/getWorkspaces', path)
    },
    async setTableName(t){
      //  console.log(t)
      this.table = t
      let tn = await ldflex[t].label
      this.table_name = `${tn}`
    },
    addTable() {
      let table = {path: this.storage+this.privacy+'/table/tables/', name:"___table name___", base: this.base}
      //console.log("new table", table)
      this.$store.dispatch('table/addTable', table)
    }
  },
  watch:{
    async base(){
      //  this.$store.dispatch('table/getBases', this.workspace)
      let name =  await ldflex[this.base].label
      this.name = `${name}`
    },
    async tables(){
      //console.log(this.tables)
      this.tick = new Date()
    }
  },
  computed:{
    tables: {
      get: function() { return this.$store.state.table.tables},
      set: function() {}
    },
    base: {
      get: function() { return this.$store.state.table.base},
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

  },

}

</script>

<style>

</style>
