<template>
  <b-button variant="outline-info" @click='fork' size="sm">
    <b-icon-alt>
    </b-icon-alt>
  </b-button>

</template>

<script>
export default {
  name: 'ForkButton',
  props: ['url'],
  methods: {
    fork(){
      console.log(this.url)
    }
  }

}
</script>

<style>

</style>
