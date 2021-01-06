<template>
  <div class="container">
    Workspace
      <EditableSpan v-model="workspace.name" /> / {{ workspace.bases.length}} bases

    <b-button pill variant="outline-secondary" @click="add"><b-icon-plus></b-icon-plus> Add a base</b-button>
    <br>
    [ start with template, import a spreadsheet, start from scratch]
    <!-- https://support.airtable.com/hc/en-us/articles/360021518753#template -->
    <b-table
    hover
    :items="workspace.bases"
    selectable
    select-mode="single"
    selected-variant="primary"
    @row-selected="onRowSelected">
    <template #cell(tables)="row">
      {{row.item.tables.length}}
    </template>
  </b-table>

  </div>
</template>

<script>
// let ldflex = window.solid
// import FC from 'solid-file-client'
// const fc = new FC( window.solid.auth )


export default {
  name: 'Workspace',
  components: {
    'EditableSpan': () => import('@/components/basic/EditableSpan'),
  },
  data() {
    return {
    //  workspace: {},
      // items: [
      //   { name: 'Base1', tables: 8, url: ""},
      //   { name: 'Base2', tables: 3, url: ""},
      //   { name: 'Base3', tables: 0, url: ""},
      //   { name: 'Base5', tables: 65, url: ""}
      // ]
    }
  },
  created() {
    this.workspace = this.$store.state.table.workspace
    console.log(this.workspace)
  },
  methods: {
    add(){
      this.workspace.bases.unshift({name: 'new base', tables:[], url: "" })
      this.$store.commit('table/setWorkspaces', this.workspaces)
    },
    onRowSelected(r){
      console.log(r)
      this.$store.commit('table/setBase', r[0])
      this.$router.push('Base')
    },
  },
  computed:{
    workspace: {
      get: function() { return this.$store.state.table.workspace},
      set: function() {}
    },
  }
}
</script>
