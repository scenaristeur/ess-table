//import store from '../store'
// if (store.state.solid.storage != null && store.state.table.privacy != null){
//     let url = store.state.solid.storage+store.state.table.privacy+'/table/workspaces/'
//   console.log("workspace url",url)
import Soukai from 'soukai';


import Field from '@/plugins/models/Field'
Soukai.loadModels({ Field });

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
        Vue.prototype.$createField = async function(f){
          await Field.create(f);
        }

        Vue.prototype.$getFields = async function(containerUrl){
          return await Field.from(containerUrl).all()
        }



        Vue.prototype.$updateField = async function(field){
          const f = new Field(field);
          console.log('FIELD UPDATE',f)
          // You can either do this...
          await f.save(field.url);

          //  return await Field.from(containerUrl).all()
        }

      },

    });

  }
}
