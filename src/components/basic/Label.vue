<template>
  <span>{{label}}</span>
</template>

<script>
import ldflex from '@solid/query-ldflex/lib/exports/rdflib'

export default {
  name:'Label',
  props: ['url', 'tick'],
  data() {
    return {
      label: '',
    }
  },
  async created(){
    this.update()
  },
  methods: {
    async update() {
      this.label = await ldflex[this.url].label
    }
  },
  watch: {
    tick() {
      this.update()
    }
  }
};
</script>
