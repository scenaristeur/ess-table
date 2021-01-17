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
    console.log('item', item)
  context.commit('addItem', item)
  await this._vm.$createWorkspace(item)
  this.dispatch('table/getWorkspaces')
  },
}

// mutations
const mutations = {
  async addItem(state, item) {
  //  state.items.todo.push(Object.assign(item, { id: state.nextId }));
    state.workspaces.push(Object.assign(item, { id: state.nextId }));

    state.nextId += 1;

  },
  updateItems(state, { items, url }) {
    state.items[url] = items;
  },
  async initializeStore() {
    const data = localStorage.getItem('ess-workspace');
    //  console.log(data)
    if (data != null){
      let st = this.state
      st.workspace = JSON.parse(data)
      this.replaceState(Object.assign(this.state, st));
    }
    // let containerUrl = "https://spoggy-test5.solidcommunity.net/public/table/workspaces/"
    //
    // let ws = await this._vm.$getWorkspaces(containerUrl)
    // console.log(ws)
  },

  // Add this mutation which removes an item from the backlog, given the item id
  removeItem(state, item) {
    [state.workspaces].forEach(
      array => {
        const indexInArray = array.findIndex(i => i.url === item.url);
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
