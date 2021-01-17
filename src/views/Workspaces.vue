<template>
  <div class="backlog-view container">
    <p>Workspaces</p>
    <NewItemForm namespace="workspace"/>
    <div class="card" v-for="item in items" :key="item.url">
      <b-button class="card-block" @click.self="open(item)" style="text-align:left">
        <h5 class="card-title"  @click.self="open(item)"><span class="text-muted" @click.self="open(item)">#{{item.id}}</span>
          {{item.name}}

          <button type="button" class="close-button pull-right" @click="removeItem(item)">
            <span>&times;</span>
          </button>
          <span :class="badgeClass(item)">{{badgeText(item)}}</span>
        </h5>
      </b-button>
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
    'NewItemForm': () => import('@/components/basic/NewItemForm'),
    // 'BasesView': () => import('@/views/BasesView')
  },
  computed: mapState({
    items: s => [...s.workspace.items.todo, ...s.workspace.items.inProgress, ...s.workspace.items.done, ... s.workspace.workspaces]
  }),
  methods: {
    open(item){

      console.log(item)
      this.$router.push({name: 'Bases', query: item})
    },
    itemLane(item) {
      if (this.$store.state.workspace.items.todo.includes(item)) {
        return 'todo';
      } else if (this.$store.state.workspace.items.inProgress.includes(item)) {
        return 'inProgress';
      }

      return 'done';
    },
    badgeText(item) {
      const lane = this.itemLane(item);
      return badgeDetail[lane].name;
    },
    badgeClass(item) {
      const lane = this.itemLane(item);
      return `${badgeDetail[lane].class} pull-right`;
    },
    removeItem(item) {
      this.$store.commit('workspace/removeItem', item);
    }
  },
};
</script>
