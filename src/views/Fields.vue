<template>
  <b-container>
    Fields
    <NewItem namespace="field"/>
    {{fields}}

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
