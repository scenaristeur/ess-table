// solid-workspace
import store from '../store'
import { /*FieldType,*/ Soukai} from 'soukai';

let containerWSUrl = "https://spoggy-test5.solidcommunity.net/public/table/workspaces/"

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
        console.log("solid-workspace plugin")
        //  console.log(Vue, options);
        //  console.log(store.state.table.workspaces)
        this.ws = store.state.table.workspaces

        Vue.prototype.$myAddedProperty = 'Example Property'
        Vue.prototype.$myAddedMethod = function() {
          return Vue.prototype.$myAddedProperty
        }

        Vue.prototype.$createWorkspace = async function(ws){
          await Workspace.create(ws);
          const workspaces = await Workspace.from(containerWSUrl).all();
          console.log("Workspaces", workspaces)
          workspaces.forEach((w) => {
            console.log("WS LABEL",w.name)
          });
        }

        Vue.prototype.$getWorkspaces = async function(containerUrl/*=this.storage+this.privacy+'/table/test/workspaces/'*/){
          return await Workspace.from(containerUrl).all();
        }

        //Vue.workspaces.push(new Date())
      },

    });

  }
}
