// solid-table

// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue, /*options*/) {
    Vue.tables = []
    Vue.table = null
    // create a mixin
    Vue.mixin({
      created() {
      //  console.log(Vue, options);
      }
    });

  }
}
