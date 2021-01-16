// Import the plugin module here
import localStoragePlugin from '@/plugins/localStorage';

// initial state
const state = () => ({
  // Next, register the plugin using the `plugins` property on the store
  plugins: [localStoragePlugin],
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
