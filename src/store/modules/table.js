//import shop from '../../api/shop'
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
import { v4 as uuidv4 } from 'uuid';
import ldflex from '@solid/query-ldflex/lib/exports/rdflib'

// initial state
const state = () => ({
  privacy: 'public',
  workspaces: [],
  workspace: {},
  bases: [],
  base: {},
  tables: [],
  table: {}
})

// getters
const getters = {}

// actions
const actions = {
  async addWorkspace(state, ws){
    let file = ws.path+uuidv4()+'.ttl'
    var dateObj = new Date();
    var date = dateObj.toISOString()
    let content = `@prefix : <#>.
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
    @prefix dct: <http://purl.org/dc/terms/>.
    @prefix dbo: <http://dbpedia.org/ontology/>.

    <> rdfs:label "${ws.name}".
    <> rdf:type dbo:Workspace.
    <> dct:created "${date}".`
    await fc.postFile( file, content, 'text/turtle' )
    console.log(file)
    //  this.updateWorkspaces(file)
  },
  async getWorkspaces(context, url){
    console.log("UPDATE", url)
    if (! await fc.itemExists( url )){
      await fc.createFolder(url)
    }
    let folder = await fc.readFolder(url)
    console.log(folder.files)
    context.commit('setWorkspaces', folder.files)
    // let workspaces = []
    // // folder.files.forEach(async(f) => {
    // //   let name =  await ldflex[f.url].label
    // //   let bases = []
    // //   for await (const base of ldflex[f.url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart']) {
    // //
    // //     bases.push(`${base}`)
    // //   }
    // //   console.log("b",bases)
    // //   let ws =   {name: `${name}`, url:f.url, bases:bases}
    // //   workspaces.push(ws)
    // // });
    // console.log(workspaces)
  },
  async getBases(context, url){
    let bases = []
      for await (const base of ldflex[url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart']) {
        bases.push(`${base}`)
      }
    context.commit('setBases', bases)
  },
  async setBase(context, url){
    context.commit('setBase', url)
    let tables = []
      for await (const table of ldflex[url]['https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart']) {
        tables.push(`${table}`)
      }
    context.commit('setTables', tables)
  },


}

// mutations
const mutations = {
  togglePrivacy(state){
    state.privacy = state.privacy == 'public' ? 'private' : 'public'
  },
  setWorkspaces(state, w){
    console.log(w)
    state.workspaces = w
  },
  setBases(state, b){
    state.bases = b
  },
  setWorkspace(state, w){
    console.log(w)
    state.workspace = w
  },
  setBase(state, b){
    console.log(b)
    state.base = b
  },
  setTables(state, t){
    state.tables = t
  },
  setTable(state, t){
    console.log(t)
    state.table = t
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
