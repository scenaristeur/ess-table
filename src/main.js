import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// import wb from "./registerServiceWorker";
// Vue.prototype.$workbox = wb;

import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'  // Install BootstrapVue

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//https://bootswatch.com/
import "bootswatch/dist/superhero/bootstrap.min.css";


Vue.config.productionTip = false


import essTable from '@/plugins/ess-table'

Vue.use(essTable)


//https://soukai.js.org/guide/going-further.html
//https://codesandbox.io/s/soukai-example-users-posts-3gryb?from-embed=&file=/src/main.js:23-83
import Soukai/*, { LogEngine, InMemoryEngine }*/ from "soukai";
import User from "./models/User";
import Post from "./models/Post";

Soukai.loadModel("User", User);
Soukai.loadModel("Post", Post);



new Vue({
  router,
  store: store,
  render: h => h(App),
  // New code - initialize the store
  created() {
    store.commit('kanban/initializeStore');
    store.commit('workspace/initializeStore');
  }
}).$mount('#app')
