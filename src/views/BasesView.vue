<template>
  <b-container>
    <h2>{{name}}
      <b-button variant="outline-info" v-b-modal.modal-ws size="sm">
        <b-icon-pen>
        </b-icon-pen>
      </b-button>
    </h2>


    <!-- <EditableSpan v-model="name" />  -->
    <hr>
    <ul>
      <li v-for="(b,i) in bases" :key=i class="mb-2" @click="showTables(b)">
        <b-button variant="outline-info">
          <b-icon-pen class="border border-info rounded p-2" font-scale="3" variant="info">
          </b-icon-pen><br>
          <Label :url="b" :tick="tick" />
        </b-button>
      </li>

      <li>
        <b-button variant="outline-primary" @click="add">
          <b-icon-plus class="border border-primary rounded p-2" font-scale="2" variant="primary">
          </b-icon-plus><br>
          Add a base
        </b-button>
      </li>

    </ul>
    <a :href="workspace" target="_blank">workspace <b-icon-link45deg></b-icon-link45deg></a>

    <b-modal id="modal-ws" title="Rename" @ok="edit_ws_name">
      <b-form-input v-model="name" placeholder="Enter the name of the workspace"></b-form-input>
    </b-modal>
    <!-- <b-card-group deck>

    <b-card v-for="(b,i) in bases" :key=i
    style="min-width: 10rem;">
    <b-card-header>Tit</b-card-header>
    <blockquote class="blockquote mb-0">
    <p>{{b}}</p>

  </blockquote>
</b-card>

</b-card-group> -->


</b-container>
</template>

<script>
import ldflex from '@solid/query-ldflex/lib/exports/rdflib'


export default {
  name: 'BasesView',
  components: {
    'Label': () => import('@/components/basic/Label'),
    //  'EditableSpan': () => import('@/components/basic/EditableSpan')
  },
  data() {
    return {
      name: "",
      tick: new Date()
    }
  },
  async created(){
    console.log(this.$route)
    let ws = this.$route.query.url
    //this.name = this.$route.query.name || "todo get name"
    this.$store.commit('table/setWorkspace', ws)
  },
  // async created() {
  //   //do something after creating vue instance
  //   let name =  await ldflex[this.workspace].label
  //   this.name = `${name}`
  //   console.log("name", this.name)
  // },
  methods: {
    async add(){
      let base = {path: this.storage+this.privacy+'/table/bases/', name:"___base name___", workspace: this.workspace}
      //  console.log(base)
      this.$store.dispatch('table/addBase', base)
    },
    showTables(b) {
      //console.log(b)
      this.$store.dispatch('table/setBase', b)
      this.$router.push('Tables')
    },
    async edit_ws_name(){
      console.log(this.name)
      await ldflex[this.workspace].label.set(this.name)
      let path = this.storage+this.privacy+'/table/workspaces/'
      console.log(path)
      this.$store.dispatch('table/getWorkspaces', path)
    }
  },
  watch:{
    async  workspace(){
      this.$store.dispatch('table/getBases', this.workspace)
      let name =  await ldflex[this.workspace].label
      this.name = `${name}`
      this.tick = new Date()
    }
  },
  computed:{
    workspace: {
      get: function() { return this.$store.state.table.workspace},
      set: function() {}
    },
    bases: {
      get: function() { return this.$store.state.table.bases},
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
