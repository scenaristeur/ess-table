//import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid';
// initial state
const state = () => ({
  items: {
    todo: [],
    inProgress: [],
    done: [],
  },
  workspaces: [],
  nextId: 1,
})

// getters
const getters = {}

// actions
const actions = {
  async addItem(context, item) {
    let path = context.rootState.solid.storage+context.rootState.table.privacy+'/table/workspaces/'
    let url = path+uuidv4()+'#it'
  //  console.log('route',this._vm)
  context.commit('addItem', item)
    let ws = await this._vm.$createWorkspace({url: url, name: item.text})
    console.log(url, ws)

  },
}

// mutations
const mutations = {
  async addItem(state, item) {
    state.items.todo.push(Object.assign(item, { id: state.nextId }));
    state.workspaces.push(Object.assign(item, { id: state.nextId }));

    state.nextId += 1;

  },
  updateItems(state, { items, id }) {
    state.items[id] = items;
  },
  initializeStore() {
    const data = localStorage.getItem('ess-workspace');
    //  console.log(data)
    if (data != null){
      let st = this.state
      st.workspace = JSON.parse(data)
      this.replaceState(Object.assign(this.state, st));
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
