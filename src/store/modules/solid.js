//import shop from '../../api/shop'
import ldflex from '@solid/query-ldflex/lib/exports/rdflib'

// initial state
const state = () => ({
  webId: null,
  storage: null
})

// getters
const getters = {}

// actions
const actions = {
  async setWebId (context, webId) {
    //  console.log(webId)
    context.commit('setWebId', webId)
    //  context.dispatch('inbox/setWebId', webId, { root: true })
    if ( webId != null ){
      context.commit('setWebId', webId)
    //  console.log (ldflex)
     let storage =  await ldflex[webId].storage
      context.commit('setStorage', `${storage}`)
    }else{
      context.commit('setWebId', null)
      //   let storage =  await ldflex.data[webId].storage
      context.commit('setStorage', null)
    }
  }
}

// mutations
const mutations = {
  setWebId(state, w){
    console.log(w)
    state.webId = w
  },
  setStorage(state, s){
    console.log(s)
    state.storage = s
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
