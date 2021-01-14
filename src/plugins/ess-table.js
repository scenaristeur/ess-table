// ess-table
import solidWorkspace from './solid-workspace'
import solidBase from './solid-base'
import solidTable from './solid-table'
import solidRecord from './solid-record'

export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue, options) {
    Vue.use(solidWorkspace, options)
    Vue.use(solidBase, options)
    Vue.use(solidTable, options)
    Vue.use(solidRecord, options)
    // create a mixin
    Vue.mixin({
      created() {
        console.log(Vue, options);
        console.log("storage", options.store.state.solid.storage)
      }
    });

  }
}
