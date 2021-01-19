//https://auth0.com/blog/vuejs-kanban-board-adding-progressive-web-app-features/#Integrating-Vuex-with-Local-Storage

export default store => {
  store.subscribe((mutation, state) => {
    // Save the entire state to Local Storage
    console.log(mutation)
    if (mutation.type.startsWith("kanban") && state.kanban != undefined){
      //  console.log('subscribe',mutation, state.kanban)
      localStorage.setItem('ess-kanban', JSON.stringify(state.kanban));
     }
    else if (mutation.type.startsWith('table')){
       console.log('put to localStorage', state.table)
      localStorage.setItem('ess-table', JSON.stringify(state.table));
    }
    else if (mutation.type.startsWith('field')){
       console.log('put to localStorage', state.field)
      localStorage.setItem('ess-fields', JSON.stringify(state.field));
    }
  });
};
