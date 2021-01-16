<template>
  <div id="app">
    <div class="page-header">
      <h1>Kanban Board</h1>
      <p class="lead">An example of a Kanban board, written in Vue.js</p>
    </div>
    <MenuBar />
    <router-view/>
    <SolidTrackSession />
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
    'SolidTrackSession': () => import('@/components/solid/SolidTrackSession'),
    'MenuBar': () => import('@/components/MenuBar'),
    // 'Table': () => import('@/components/table/Table'),
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.page-header h1 {
  font-weight: 300;
}
.card {
  margin-bottom: 10px;
}
.card:last-child {
  margin-bottom: 25px;
}
.card-block {
  padding: 15px;
}
</style>
