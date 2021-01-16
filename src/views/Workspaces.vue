<template>
  <div class="backlog-view container">
    <p>Workspaces</p>
    <NewItemForm namespace="workspace"/>
    <div class="card" v-for="item in items" :key="item.id">
      <b-button left class="card-block" @click="open(item)">
        <h5 class="card-title"><span class="text-muted">#{{item.id}}</span>
          {{item.text}}

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
    items: s => [...s.workspace.items.todo, ...s.workspace.items.inProgress, ...s.workspace.items.done]
  }),
  methods: {
    open(item){
      this.$router.push({path: '/bases', params: item})
      console.log(item)
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
      return badgeDetail[lane].text;
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
