<template>
  <div>
    <b-container  fluid>
      <b-row>
        <b-col cols="4">
          <WorkspacesView />
        </b-col>
        <b-col>
          <BasesView />
        </b-col>
      </b-row>

      <p>
        <a href="https://github.com/scenaristeur/ess-table/blob/main/README.md" target="_blank"> Source code, tuto, issues for EssTable app</a>
      </p>


      <h3>Ess-Table</h3>
      <ul>
        <li> AirTable on Solid for Ess : <a href="https://github.com/solid/solid-spec/" target="_blank">Solid Specifications</a></li><br>
        <li> <a href="https://scenaristeur.github.io/ess-table/" target="_blank">*EssTable App hosted on github gh-pages</a></li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
    'WorkspacesView': () => import('@/views/WorkspacesView'),
    'BasesView': () => import('@/views/BasesView')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
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
