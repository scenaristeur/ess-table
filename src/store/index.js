import Vue from 'vue'
import Vuex from 'vuex'
// Import the plugin module here
import localStoragePlugin from '@/plugins/localStorage';
import app from './modules/app'
import solid from './modules/solid'
import table from './modules/table'
import kanban from './modules/kanban'

Vue.use(Vuex)

export default new Vuex.Store({
  // Next, register the plugin using the `plugins` property on the store
  plugins: [localStoragePlugin],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { app, solid, table, kanban
  }
})
