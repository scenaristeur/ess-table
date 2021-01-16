//https://auth0.com/blog/vuejs-kanban-board-adding-progressive-web-app-features/#Integrating-Vuex-with-Local-Storage

export default store => {
  store.subscribe((m, state) => {
    // Save the entire state to Local Storage
    console.log('state', state)
    localStorage.setItem('boardState', JSON.stringify(state));
  });
};
