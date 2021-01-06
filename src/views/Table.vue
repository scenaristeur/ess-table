<template>
  <div class="container">
    TABLE
    <EditableSpan v-model="table.name" />
    <b-button pill variant="outline-secondary" @click="add"><b-icon-plus></b-icon-plus> Add a row</b-button>

    <b-table
    hover
    :items="items"
    selectable
    select-mode="single"
    selected-variant="primary"
    @row-selected="onRecordSelected"></b-table>

    <b-modal id="modal-record"
    @ok="onValidModal">
    <template #modal-title>
      <EditableSpan v-model="record.name" />
    </template>
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>
</template>

<script>
// let ldflex = window.solid
// import FC from 'solid-file-client'
// const fc = new FC( window.solid.auth )


export default {
  name: 'Table',
  components: {
    'EditableSpan': () => import('@/components/basic/EditableSpan'),
  },
  data() {
    return {
      items: [
        { name: 'record1', fields: "?", url: ""},
        { name: 'record2', fields: "?", url: ""},
        { name: 'record3', fields: "?", url: ""},
        { name: 'record4', fields: "?", url: ""}
      ],
      record:{}
    }
  },
  methods: {
    add(){
      this.items.unshift({name: 'new record', fields: "?", url: "" })
    },
    onValidModal(){
      console.log(this.record)
    },
    onRecordSelected(r){
      console.log(r)
      if (r.length > 0){
        this.record = r[0]
        this.$bvModal.show('modal-record')
      }
      //  this.$router.push('Row')
    }
  },
  computed:{
    table: {
      get: function() { return this.$store.state.table.table},
      set: function() {}
    },
  }
}
</script>
