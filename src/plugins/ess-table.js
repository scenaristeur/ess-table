// ess-table
import solidWorkspace from './solid-workspace'
import solidBase from './solid-base'
import solidTable from './solid-table'
import solidRecord from './solid-record'
import solidTask from './solid-task'
import essModels from './ess-models'
//import store from '../store'

export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue, options) {
    Vue.use(solidWorkspace, options)
    Vue.use(solidBase, options)
    Vue.use(solidTable, options)
    Vue.use(solidRecord, options)
    Vue.use(solidTask, options)
    Vue.use(essModels, options)
    // create a mixin
    Vue.mixin({
      created() {
        //  console.log(store)
        // console.log(Vue, options);
        // console.log("storage", store.state.solid.storage)
        // console.log("workspaces", Vue.workspaces)
        // console.log("bases", Vue.bases)
        // console.log("tables", Vue.tables)
        // console.log("records", Vue.records)
      }
    });

  }
}
