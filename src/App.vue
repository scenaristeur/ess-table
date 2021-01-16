<template>
  <div id="app">
    <div class="page-header container">
      <h1>Ess table</h1>
      <p class="lead">Kanban & Tables on Solid.</p>
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
.card-title {
  margin-bottom: 0;
}

h5 {
  margin-bottom: 0;
}

.close-button {
  background: transparent;
  border: 0;
  margin:  0 0 0 20px;
  padding: 0;
  color: white;
  opacity: 0.3;
  float: right;
}
.badge{
  float: right;
  margin:  0 0 0 40px;
}

.close-button:hover {
  cursor: pointer;
}
/* #app {
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
} */
</style>
