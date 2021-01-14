// initial state
const state = () => ({
  breadcrumb: [
    {
      text: 'Workspaces',
      href: '#'
    },
    {
      text: 'Bases',
      href: '#'
    },
    {
      text: 'Tables',
      href: '#'
    },
    {
      text: 'Records',
    //  active: true
    }
  ]
})

// getters
const getters = {}

// actions
const actions = {

}

// mutations
const mutations = {
  setWebId(state, w){
    console.log(w)
    state.webId = w
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
