<template>
  <div>
    <b-breadcrumb v-if="breadcrumb.length > 0" :items="breadcrumb"></b-breadcrumb>
    {{ privacy }}
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
    //  breadcrumb: []
    }
  },
  // watch:{
  //   async workspace(){
  //     console.log("todo mutualiser la recuperation des labels et mettre en cache sous forme d'objets")
  //     let name =  await ldflex[this.workspace].label
  //     this.ws = `${name}`
  //     this.items = []
  //     this.items[0] = {
  //       text: this.ws,
  //       href: '#'
  //     }
  //
  // }
  //},
  computed:{
    breadcrumb: {
      get: function() { return this.$store.state.app.breadcrumb},
      set: function() {}
    },
    privacy: {
      get: function() { return this.$store.state.table.privacy},
      set: function() {}
    },
  }
}
</script>

<style>

</style>
