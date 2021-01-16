import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import solid from './modules/solid'
import table from './modules/table'
import kanban from './modules/kanban'

// Import the plugin module here
import localStoragePlugin from '@/plugins/localStorage';

Vue.use(Vuex)

export default new Vuex.Store({
  // Next, register the plugin using the `plugins` property on the store
  plugins: [localStoragePlugin],
  state: {
  },
  mutations: {
    initializeStore() {

      const data = localStorage.getItem('boardState');
      console.log('initializeStore', data)
      if (data) {
        this.replaceState(Object.assign(this.state, JSON.parse(data)));
      }
    },

    // Add this mutation which removes an item from the backlog, given the item id
    removeItem(state, item) {
      [state.items.todo, state.items.inProgress, state.items.done].forEach(
        array => {
          const indexInArray = array.findIndex(i => i.id === item.id);
          if (indexInArray > -1) {
            array.splice(indexInArray, 1);
          }
        }
      );
    }
  },
  actions: {
  },
  modules: { app, solid, table, kanban
  }
})
