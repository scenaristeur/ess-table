//import shop from '../../api/shop'

// initial state
const state = () => ({
  workspaces: [
    { name: 'Disckerson', bases: [
      { name: 'Base1', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
        { name: 'Table2', rows: 3, fields: "?", url: ""},
        { name: 'Table3', rows: 0, fields: "?", url: ""},
        { name: 'Table5', rows: 65, fields: "?", url: ""}
      ], url: ""},
      { name: 'Base2', tables: [
         { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""},
      { name: 'Base3', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""},
      { name: 'Base5', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""}
    ], url: ""},
    { name: 'Larsen', bases: [
      { name: 'Base1', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
        { name: 'Table2', rows: 3, fields: "?", url: ""},
        { name: 'Table3', rows: 0, fields: "?", url: ""},
        { name: 'Table5', rows: 65, fields: "?", url: ""}
      ], url: ""},
      { name: 'Base2', tables: [
         { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""},
      { name: 'Base3', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""},
      { name: 'Base5', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""}
    ], url: ""},
    { name: 'Geneva', bases: [
      { name: 'Base1', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""},
      { name: 'Base2', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""},
      { name: 'Base3', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""},
      { name: 'Base5', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""}
    ], url: ""},
    { name: 'Jami', bases: [
      { name: 'Base1', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""},
      { name: 'Base2', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""},
      { name: 'Base3', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""},
      { name: 'Base5', tables: [
        { name: 'Table1', rows: 8, fields: "?", url: ""},
      { name: 'Table2', rows: 3, fields: "?", url: ""},
      { name: 'Table3', rows: 0, fields: "?", url: ""},
      { name: 'Table5', rows: 65, fields: "?", url: ""}
    ], url: ""}
    ], url: ""}
  ],
  workspace: {},
  base: {},
  table: {}
})

// getters
const getters = {}

// actions
const actions = {
  /*requestUpdate(state, url){

  //state.requests.push(url)
}*/
}

// mutations
const mutations = {
  setWorkspaces(state, w){
    console.log(w)
    state.workspaces = w
  },
  setWorkspace(state, w){
    console.log(w)
    state.workspace = w
  },
  setBase(state, b){
    console.log(b)
    state.base = b
  },
  // setUser(state, user){
  //   console.log("User",user)
  //   let webId = user.webId
  //   let pic = user.pic
  //   state.users[webId]= pic
  // },
  // setFileUrl(state, fileUrl){
  //   state.fileUrl = fileUrl
  // },
  // setRoot (state, root) {
  //   console.log(root)
  //   state.root = root
  // },
  // setMessages(state,messages){
  //   state.messages = messages
  // },
  /*
  setPath(state, path){
  state.path = path
},
setMessages(state,messages){
state.messages = messages
},
setDataDate(state, date){
state.dataDate = date
},*/


}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
