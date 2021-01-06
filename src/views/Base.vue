<template>
  <div class="container">
    Base

    <b-button pill variant="outline-secondary" @click="add_workspace"><b-icon-plus></b-icon-plus> Add a table</b-button>
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
  name: 'Base',
  data() {
    return {
      items: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
        { name: 'Table2', rows: 3, fields: "?", url: ""},
        { name: 'Table3', rows: 0, fields: "?", url: ""},
        { name: 'Table5', rows: 65, fields: "?", url: ""}
      ]
    }
  },
  methods: {
    add_workspace(){
      this.items.unshift({name: 'new table', rows:0, fields: "?", url: "" })
    },
    onRowSelected(r){
      console.log(r)
          this.$router.push('Table')
    }
  }
}
</script>
