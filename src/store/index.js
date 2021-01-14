import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import solid from './modules/solid'
import table from './modules/table'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { app, solid, table
  }
})
