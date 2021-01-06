<template>
  <div class="container">
    Base :       <EditableSpan v-model="base.name" /> / {{base.tables.length}} tables

    <b-button pill variant="outline-secondary" @click="add"><b-icon-plus></b-icon-plus> Add a table</b-button>
    <b-table
    hover
    :items="base.tables"
    selectable
    select-mode="single"
    selected-variant="primary"
    @row-selected="onRowSelected">
    <template #cell(records)="row">
      {{row.item.records.length}}
    </template>
  </b-table>

</div>
</template>

<script>
// let ldflex = window.solid
// import FC from 'solid-file-client'
// const fc = new FC( window.solid.auth )


export default {
  name: 'Base',
  components: {
    'EditableSpan': () => import('@/components/basic/EditableSpan'),
  },
  data() {
    return {
      // items: [
      // { name: 'Table1', rows: 8, fields: "?", url: ""},
      // { name: 'Table2', rows: 3, fields: "?", url: ""},
      // { name: 'Table3', rows: 0, fields: "?", url: ""},
      // { name: 'Table5', rows: 65, fields: "?", url: ""}
      // ]
    }
  },
  methods: {
    add(){
      this.base.tables.unshift({name: 'new table', rows:[], fields: [], url: "" })
      this.$store.commit('table/setBase', this.base)
    },
    onRowSelected(r){
      console.log(r)
      this.$store.commit('table/setTable', r[0])
      this.$router.push('Table')
    }
  },
  computed:{
    base: {
      get: function() { return this.$store.state.table.base},
      set: function() {}
    },
  }
}
</script>
