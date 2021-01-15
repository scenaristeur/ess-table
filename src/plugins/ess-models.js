// ess-model
import SoukaiSolid, { SolidEngine, /*SolidModel*/ } from 'soukai-solid';
import SolidAuthClient from 'solid-auth-client';
import { /*FieldType,*/ Soukai} from 'soukai';

import Person from '@/plugins/models/Person'


SoukaiSolid.loadSolidModels();
Soukai.loadModels({ Person });

Soukai.useEngine(new SolidEngine(SolidAuthClient.fetch.bind(SolidAuthClient)));

let containerUrl = "https://spoggy-test5.solidcommunity.net/public/table/test/persons/"

// SoukaiSolid.loadSolidModels();
// Soukai.loadModels({ Person });
// Soukai.useEngine(new SolidEngine(SolidAuthClient.fetch.bind(SolidAuthClient)));
// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue, /*options*/) {
    Vue.bases = []
    Vue.base = null
    // create a mixin
    Vue.mixin({
      async created() {

        //  console.log(Vue, options);
      },

    });

    Vue.prototype.$createPerson = async function(name= "inconnu"){
      await Person.at(containerUrl).create({ name: name });
      const persons = await Person.from(containerUrl).all();
      console.log("Persons", persons)
      persons.forEach((p) => {
        console.log("NAme",p.name)
      });

    }







  }
}
