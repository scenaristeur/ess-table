<template>
  <div class="container">
    Workspaces

    <b-button pill variant="outline-secondary" @click="add"><b-icon-plus></b-icon-plus> Add a workspace</b-button>
    <b-table
    hover
    :items="workspaces"
    selectable
    select-mode="single"
    selected-variant="primary"
    @row-selected="onRowSelected">
    <template #cell(bases)="row">
      {{row.item.bases.length}}
    </template>


  </b-table>

  Storage : {{ storage }}

</div>
</template>

<script>
// let ldflex = window.solid
// import FC from 'solid-file-client'
// const fc = new FC( window.solid.auth )


export default {
  name: 'Workspaces',
  data() {
    return {

    }
  },
  methods: {
    add(){
      this.workspaces.unshift({name: 'new workspace', bases:[], url: "" })
      this.$store.commit('table/setWorkspaces', this.workspaces)
    },
    onRowSelected(r){
      console.log(r)
      this.$store.commit('table/setWorkspace', r[0])
      this.$router.push('Workspace')
    },
  },
  computed:{
    workspaces: {
      get: function() { return this.$store.state.table.workspaces},
      set: function() {}
    },
    storage: {
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
  }
}
</script>
