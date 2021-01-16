<template>
  <div class="backlog-view container">
    <p>Backlog</p>
    <NewItemForm />
    <div class="card" v-for="item in items" :key="item.id">
      <div class="card-block">
        <h5 class="card-title"><span class="text-muted">#{{item.id}}</span>
          {{item.text}}
            <span :class="badgeClass(item)">{{badgeText(item)}}</span>
            <button type="button" class="close-button pull-right" @click="removeItem(item)">
              <span>&times;</span>
            </button>
          </h5>
        </div>
      </div>
    </div>
  </template>

  <script>
  //https://auth0.com/blog/vuejs-kanban-board-the-development-process/
  import { mapState } from 'vuex';

  const badgeDetail = {
    todo: {
      text: 'to-do',
      class: 'badge badge-light',
    },
    inProgress: {
      text: 'in progress',
      class: 'badge badge-info',
    },
    done: {
      text: 'done',
      class: 'badge badge-success',
    },
  };

  export default {
    name: 'Backlog',
    components: {
      'NewItemForm': () => import('@/components/kanban/NewItemForm'),
      // 'BasesView': () => import('@/views/BasesView')
    },
    computed: mapState({
      items: s => [...s.kanban.items.todo, ...s.kanban.items.inProgress, ...s.kanban.items.done]
    }),
    methods: {
      itemLane(item) {
        if (this.$store.state.kanban.items.todo.includes(item)) {
          return 'todo';
        } else if (this.$store.state.kanban.items.inProgress.includes(item)) {
          return 'inProgress';
        }

        return 'done';
      },
      badgeText(item) {
        const lane = this.itemLane(item);
        return badgeDetail[lane].text;
      },
      badgeClass(item) {
        const lane = this.itemLane(item);
        return `${badgeDetail[lane].class} pull-right`;
      },
      removeItem(item) {
     this.$store.commit('kanban/removeItem', item);
   }
    },
  };
  </script>
