import store from '../store'
import Soukai from 'soukai';


import Task from '@/plugins/models/Task'
Soukai.loadModels({ Task });

// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue,/* options*/) {
    Vue.tasks = []
    Vue.task = null
    // create a mixin
    Vue.mixin({
      created() {
        Vue.prototype.$createTask = async function(task){
          console.log("task",task)
          await Task.create(task);
        }

        Vue.prototype.$getTasks = async function(containerUrl){
          let url = store.state.solid.storage+store.state.table.privacy+'/table/tasks/'
          console.log("task url",url)
          return await Task.from(containerUrl).all();
        }

      },

    });

  }
}
