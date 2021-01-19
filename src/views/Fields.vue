<template>
  <b-container>
    Fields
    <NewItem namespace="field"/>
    <b-list-group>
      <b-list-group-item v-for="f in fields" :key="f.url" href="#some-link">
        <FieldEdit :field="f" />
      </b-list-group-item>
    </b-list-group>
    <hr>
    {{storage}}
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Fields',
  components: {
    'NewItem': () => import('@/components/basic/NewItem'),
    'FieldEdit': () => import('@/components/ess/FieldEdit'),
  },
  created(){
    this.getFields()
  },
  methods: {
    getFields() {
      if (this.storage != null){
        console.log("GET FIELDS , STORAGE",this.storage)
        this.$store.dispatch('field/getFields')
      }
    }
  },
  computed: mapState({
    fields: s =>  s.field.fields,
    fields_types: s => s.field.fields_types,
    storage: s => s.solid.storage
  }),
  watch:{
    storage(){
      this.getFields()
    }
  }
}
</script>

<style>

</style>
