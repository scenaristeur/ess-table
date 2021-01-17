import store from '../store'
import Soukai from 'soukai';


import Workspace from '@/plugins/models/Workspace'
Soukai.loadModels({ Workspace });

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
        Vue.prototype.$createWorkspace = async function(ws){
          await Workspace.create(ws);
        }

        Vue.prototype.$getWorkspaces = async function(containerUrl){
          let url = store.state.solid.storage+store.state.table.privacy+'/table/workspaces/'
          console.log("workspace url",url)
          return await Workspace.from(containerUrl).all();
        }

      },

    });

  }
}
