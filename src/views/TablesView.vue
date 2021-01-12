<template>
  <b-container>
    <h2>{{name}}
      <b-button variant="outline-info" v-b-modal.modal-base size="sm">
        <b-icon-pen>
        </b-icon-pen>
      </b-button>
    </h2>
    <a :href="base" target="_blank">base <b-icon-link45deg></b-icon-link45deg></a>

    <hr>
    <b-card no-body>
      <b-tabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <b-tab v-for="(t,i) in tables" :key="'dyn-tab-' + i">
          <template #title>
            <small><Label :url="t" :tick='tick' />
              <b-button variant="outline-info" v-b-modal.modal-table size="sm" @click="setTableName(t)">
                <b-icon-pen btn>
                </b-icon-pen>
              </b-button>


            </small>
          </template>
          <TableView :url="t"/>
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
          Il n'y a aucun projet ouvert<br>
          Ouvrez un nouveau projet encliquant sur le bouton <b>+</b> juste au dessus.
        </div>
      </template>
    </b-tabs>
  </b-card>

  <hr>
  <b-tabs content-class="mt-3">

    <b-tab title="i" v-for="(t,i) in tables" :key="i" :active="i == 0">
      <TableView :url="t"/>
    </b-tab>
    <b-tab title="First"><p>I'm the first tab</p></b-tab>
    <b-tab title="Add a table"><p>I'm the second tab</p></b-tab>
  </b-tabs>

  {{tables}}

  <b-modal id="modal-base" title="Rename" @ok="edit_base_name">
    <b-form-input v-model="name" placeholder="Enter the name of the base"></b-form-input>
  </b-modal>

  <b-modal id="modal-table" title="Rename" @ok="edit_table_name">
    <b-form-input v-model="table_name" placeholder="Enter the name of the table"></b-form-input>
  </b-modal>

</b-container>
</template>

<script>
import ldflex from '@solid/query-ldflex/lib/exports/rdflib'


export default {
  name: 'TablesView',
  components: {
    'TableView': () => import('@/views/TableView'),
    'Label': () => import('@/components/basic/Label')
  },
  data() {
    return {
      name: "",
      table_name:"",
      tick: new Date()
    }
  },
  async created() {
    //do something after creating vue instance
    let name =  await ldflex[this.base].label
    this.name = `${name}`
  },
  methods: {
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
