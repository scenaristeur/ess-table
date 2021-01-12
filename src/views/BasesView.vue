<template>
  <b-container>
    BAses View
    {{workspace}}
    <br>
    <!-- {{ bases}} -->

    <ul>
      <li v-for="(b,i) in bases" :key=i class="mb-2" @click="showTables(b)">
        <b-button variant="outline-info">
          <b-icon-pen class="border border-info rounded p-2" font-scale="4" variant="info">
          </b-icon-pen>
          <Label :url="b" />
        </b-button>
      </li>

      <li>
        <b-button variant="secondary">
          <b-icon-plus class="border border-secondary rounded p-2" font-scale="4" variant="secondary">
          </b-icon-plus>
          Add a base
        </b-button>
      </li>

    </ul>
    <!-- <b-card-group deck>

      <b-card v-for="(b,i) in bases" :key=i
      style="min-width: 10rem;">
      <b-card-header>Tit</b-card-header>
      <blockquote class="blockquote mb-0">
        <p>{{b}}</p>

      </blockquote>
    </b-card>

  </b-card-group> -->


</b-container>
</template>

<script>
export default {
  name: 'BasesView',
  components: {
     'Label': () => import('@/components/basic/Label'),
  },
  data() {
    return {
      //workspace:""
    }
  },
  methods: {
    showTables(b) {
      console.log(b)
      this.$store.dispatch('table/setBase', b)
      this.$router.push('Tables')
    }
  },
  watch:{
    workspace(){
      this.$store.dispatch('table/getBases', this.workspace)
    }
  },
  computed:{
    workspace: {
      get: function() { return this.$store.state.table.workspace},
      set: function() {}
    },
    bases: {
      get: function() { return this.$store.state.table.bases},
      set: function() {}
    },
  }

}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
