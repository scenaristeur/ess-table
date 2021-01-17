//import Vue from 'vue'

// initial state
const state = () => ({
  // items: {
  //   todo: [],
  //   inProgress: [],
  //   done: [],
  // },
  workspaces: [],
  nextId: 1,
})

// getters
const getters = {}

// actions
const actions = {
  async addItem(context, item) {
  //  console.log('route',this._vm)
  context.commit('addItem', item)
  await this._vm.$createWorkspace(item)
  },
}

// mutations
const mutations = {
  async addItem(state, item) {
  //  state.items.todo.push(Object.assign(item, { id: state.nextId }));
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
