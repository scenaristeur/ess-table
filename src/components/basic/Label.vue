<template>
  <span>{{label}}</span>
</template>

<script>
import ldflex from '@solid/query-ldflex/lib/exports/rdflib'

export default {
  name:'Label',
  props: ['url'],
  data() {
    return {
      label: '',
    }
  },
async created(){
    this.label = await ldflex[this.url].label
  },
};
</script>
