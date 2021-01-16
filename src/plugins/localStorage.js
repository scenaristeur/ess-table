//https://auth0.com/blog/vuejs-kanban-board-adding-progressive-web-app-features/#Integrating-Vuex-with-Local-Storage

export default store => {
  store.subscribe((mutation, state) => {
    // Save the entire state to Local Storage
    console.log(mutation)
    if (mutation.type.startsWith("kanban") && state.kanban != undefined){
      //  console.log('subscribe',mutation, state.kanban)
      localStorage.setItem('ess-kanban', JSON.stringify(state.kanban));
    }else if (mutation.type.startsWith("workspace") && state.workspace != undefined){
      //  console.log('subscribe',mutation, state.kanban)
      localStorage.setItem('ess-workspace', JSON.stringify(state.workspace));
    }
  });
};
