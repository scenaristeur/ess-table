import Vue from 'vue'
import Vuex from 'vuex'
import table from './modules/table'
import solid from './modules/solid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { table, solid
  }
})
