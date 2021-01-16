// initial state
const state = () => ({
  items: {
    todo: [],
    inProgress: [],
    done: [],
  },
  nextId: 1,
})

// getters
const getters = {}

// actions
const actions = {

}

// mutations
const mutations = {
  addItem(state, item) {
    state.items.todo.push(Object.assign(item, { id: state.nextId }));
    state.nextId += 1;
  },
  updateItems(state, { items, id }) {
   state.items[id] = items;
 },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
