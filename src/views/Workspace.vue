<template>
  <div class="container">
    Workspace

    <b-button pill variant="outline-secondary" @click="add_workspace"><b-icon-plus></b-icon-plus> Add a base</b-button>
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
  name: 'Workspace',
  data() {
    return {
      items: [
        { name: 'Base1', tables: 8, url: ""},
        { name: 'Base2', tables: 3, url: ""},
        { name: 'Base3', tables: 0, url: ""},
        { name: 'Base5', tables: 65, url: ""}
      ]
    }
  },
  methods: {
    add_workspace(){
      this.items.unshift({name: 'new base', tables:0, url: "" })
    },
    onRowSelected(r){
      console.log(r)
          this.$router.push('Base')
    }
  }
}
</script>
