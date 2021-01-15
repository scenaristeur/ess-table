<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Workspaces</router-link> |
      <!-- <router-link to="/pod">Pod</router-link> |
      <router-link to="/browser">Browser</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/workspaces">Workspaces</router-link> | -->
      <router-link to="/templates">Templates</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <SolidTrackSession />


    <div class="update-dialog" v-if="prompt">
       <div class="update-dialog__content">
         A new version is found. Refresh to load it?
       </div>
       <div class="update-dialog__actions">
         <button
           class="update-dialog__button update-dialog__button--confirm"
           @click="update"
         >
           Update
         </button>
         <button
           class="update-dialog__button update-dialog__button--cancel"
           @click="prompt = false"
         >
           Cancel
         </button>
       </div>
     </div>


  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
    'SolidTrackSession': () => import('@/components/solid/SolidTrackSession'),
    // 'Table': () => import('@/components/table/Table'),
  },
  methods: {
    async update() {
      this.prompt = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  },
  data() {
    return {
      prompt: false
    };
  },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.prompt = true;
      });
    }
  }

}
</script>

<style scoped>
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

.update-dialog {
  position: fixed;
  left: 50%;
  bottom: 64px;
  transform: translateX(-50%);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 12px;
  max-width: 576px;
  color: white;
  background-color: #2c3e50;
  text-align: left;
  /* &__actions {
    display: flex;
    margin-top: 8px;
  }
  &__button {
    margin-right: 8px;
    &--confirm {
      margin-left: auto;
    }
  } */
}
</style>
