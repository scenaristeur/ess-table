<template>
  <div class="container">
    TABLE
    <b-button pill variant="outline-secondary" @click="add"><b-icon-plus></b-icon-plus> Add a row</b-button>

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
  name: 'Table',
  data() {
    return {
      items: [
        { name: 'row1', rows: 8, fields: "?", url: ""},
        { name: 'row2', rows: 3, fields: "?", url: ""},
        { name: 'row3', rows: 0, fields: "?", url: ""},
        { name: 'row4', rows: 65, fields: "?", url: ""}
      ]
    }
  },
  methods: {
    add(){
      this.items.unshift({name: 'new row', rows:0, fields: "?", url: "" })
    },
    onRowSelected(r){
      console.log(r)
      this.$router.push('Table')
    }
  }
}
</script>
