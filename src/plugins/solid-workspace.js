// solid-workspace
import store from '../store'

// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue,/* options*/) {
    Vue.workspaces = []
    Vue.workspace = null
    // create a mixin
    Vue.mixin({
      created() {
      //  console.log(Vue, options);
      //  console.log(store.state.table.workspaces)
        this.ws = store.state.table.workspaces

        Vue.prototype.$myAddedProperty = 'Example Property'
        Vue.prototype.$myAddedMethod = function() {
          return Vue.prototype.$myAddedProperty
        }
        //Vue.workspaces.push(new Date())
      },

    });

  }
}
