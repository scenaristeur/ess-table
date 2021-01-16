<template>
  <b-container fluid>
    Connected
    <b-button @click="init" variant="primary">Workspaces</b-button>
    <b-breadcrumb :items="breadcrumb"></b-breadcrumb>

    <!-- <WorkspacesView v-if="workspace == null"/>

    <BasesView v-else /> -->

  </b-container>
</template>

<script>
export default {
  components: {
    // 'WorkspacesView': () => import('@/views/WorkspacesView'),
    // 'BasesView': () => import('@/views/BasesView')
  },
  methods: {
    init() {
      this.$store.commit('table/setWorkspace', null)
    }
  },
  computed:{
    workspace: {
      get: function() { return this.$store.state.table.workspace},
      set: function() {}
    },
    breadcrumb: {
      get: function() { return this.$store.state.app.breadcrumb},
      set: function() {}
    },
  }
}
</script>

<style>

</style>
