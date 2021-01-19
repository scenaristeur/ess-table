//import shop from '../../api/shop'
// import auth from 'solid-auth-client';
// import FC from 'solid-file-client'
// const fc = new FC( auth )
// import { v4 as uuidv4 } from 'uuid';
// import ldflex from '@solid/query-ldflex/lib/exports/rdflib'
// import { namedNode } from "@rdfjs/data-model";
import { v4 as uuidv4 } from 'uuid';

// initial state
const state = () => ({
  fields: localStorage.getItem('ess-fields') || []
})

// getters
const getters = {}

// actions
const actions = {
  async addItem(context, item) {
    item.url = context.rootState.solid.storage+context.rootState.table.privacy+'/table/fields/'+uuidv4()+'.ttl'//#it'
    console.log('item', item)
    context.commit('addItem', item)
    await this._vm.$createField(item)
    //  this.dispatch('table/getWorkspaces')
  },
  async getFields(context){
    let url = context.rootState.solid.storage+context.rootState.table.privacy+'/table/fields/'
    let remote_fields = await this._vm.$getFields(url)
    console.log("Remote",remote_fields)

  //  let st = this.state
    let fields = remote_fields.map(x => ({'name' : x.name, 'createdAt': x.createdAt, 'updatedAt': x.updatedAt, url: x.url})).sort((itemA, itemB) => new Date(itemA.updatedAt) - new Date(itemB.updatedAt));
console.log('rem', fields)
context.commit('setFields', fields)
  //  this.replaceState(Object.assign(this.state, st));

  }
  // async init(context) {
  //   const data = localStorage.getItem('ess-fields');
  //   console.log("Local",data)
  //   if (data != null){
  //     let st = this.state
  //     st.fields = JSON.parse(data)
  //     this.replaceState(Object.assign(this.state, st));
  //   }
  //   console.log(context)
  // },
}

// mutations
const mutations = {
  addItem(state, item){
    state.fields.push(item)
  },
  setFields(state, f){
    state.fields = f
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
