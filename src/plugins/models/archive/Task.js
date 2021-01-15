import {Model, Collection} from 'vue-mc'
import store from '@/store'
import { v4 as uuidv4 } from 'uuid';
/**
* Task model
*/
export class Task extends Model {
  options() {
    return {
      identifier: store.state.solid.storage+uuidv4(),
      // methods() {
      //   return {
      //     fetch: console.log('fetch',this),
      //     save: console.log('save',this)
      //
      //   }
      // }
    }
  }
  // Default attributes that define the "empty" state.
  defaults() {
    return {
      url:   null,
      name: '',
      done: false,
    }
  }

  // Attribute mutations.
  mutations() {
    return {
      //  id:   (id) => Number(id) || null,
      url: String,
      name: String,
      done: Boolean,
    }
  }


  // Attribute validation
  // validation() {
  //     return {
  //         id:   integer.and(min(1)).or(equal(null)),
  //         name: string.and(required),
  //         done: boolean,
  //     }
  // }



  // Route configuration
  routes() {
    return {
      fetch: '/task/{url}',
      save:  '/task',
    }
  }
}

export class TaskList extends Collection {

  // Model that is contained in this collection.
  model() {
    return Task;
  }

  // Default attributes
  defaults() {
    return {
      orderBy: 'name',
    }
  }

  // Route configuration
  routes() {
    return {
      fetch: '/tasks',
    }
  }

  // Number of tasks to be completed.
  get todo() {
    return this.sum('done');
  }

  // Will be `true` if all tasks have been completed.
  get done() {
    return this.todo == 0;
  }
}
