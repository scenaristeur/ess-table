<template>
  <b-container>
Base {{ base }}
<h2>{{name}}
  <b-button variant="outline-info" v-b-modal.modal-base size="sm">
    <b-icon-pen>
    </b-icon-pen>
  </b-button>
</h2>
<hr>
    <b-card no-body>
    <b-tabs card>
      <!-- Render Tabs, supply a unique `key` to each tab -->
      <b-tab v-for="(t,i) in tables" :key="'dyn-tab-' + i">
        <template #title>
       <small><Label :url="t" /></small>
     </template>
       <TableView :url="t"/>
        <!-- ProjetIOIOI {{ t }} -->

        <!-- <b-button size="sm" variant="danger" class="float-right" @click="closeProjet(p)">
          Close projet
        </b-button> -->
      </b-tab>

      <!-- New Tab Button (Using tabs-end slot) -->
      <template #tabs-end>
        <b-nav-item role="presentation" @click.prevent="newTable" href="#"><b>+</b></b-nav-item>
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
      name: ""
    }
  },
async created() {
    //do something after creating vue instance
    let name =  await ldflex[this.base].label
    this.name = `${name}`
  },
  methods: {
    async edit_base_name(){
      console.log(this.name)
      await ldflex[this.base].label.set(this.name)
    //  let path = this.storage+this.privacy+'/table/workspaces/'
      //console.log(path)
    //  this.$store.dispatch('table/getWorkspaces', path)
    },
    newTable() {
      console.log("new table")
    }
  },
  watch:{
    async base(){
    //  this.$store.dispatch('table/getBases', this.workspace)
      let name =  await ldflex[this.base].label
      this.name = `${name}`
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
  },

}

</script>

<style>

</style>
