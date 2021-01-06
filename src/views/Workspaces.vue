<template>
  <div class="container">
    Workspaces

    <b-button pill variant="outline-secondary" @click="add_workspace"><b-icon-plus></b-icon-plus> Add a workspace</b-button>
    <b-table
    hover
    :items="items"
     selectable
     select-mode="single"
     selected-variant="primary"
      @row-selected="onRowSelected"></b-table>

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
      items: [
        { name: 'Dickerson', bases: 8, url: ""},
        { name: 'Larsen', bases: 3, url: ""},
        { name: 'Geneva', bases: 0, url: ""},
        { name: 'Jami', bases: 65, url: ""}
      ]
    }
  },
  methods: {
    add_workspace(){
      this.items.unshift({name: 'new workspace', bases:0, url: "" })
    },
    onRowSelected(r){
      console.log(r)
      this.$router.push('Workspace')
    }
  }
}
</script>
