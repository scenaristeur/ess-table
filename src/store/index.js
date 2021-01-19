import Vue from 'vue'
import Vuex from 'vuex'
// Import the plugin module here
import localStoragePlugin from '@/plugins/localStorage';
//import solidWorkspacePlugin from '@/plugins/solid-workspace';
import app from './modules/app'
import solid from './modules/solid'
import table from './modules/table'
import kanban from './modules/kanban'
import workspace from './modules/workspace'
import field from './modules/field'

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
  modules: { app, solid, table, kanban, workspace, field
  }
})
