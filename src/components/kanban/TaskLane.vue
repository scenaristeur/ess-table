<template>
  <div class="card">
    <h3 class="card-header">{{title}}</h3>
    <div class="card-body">
      <Draggable v-model="draggables" :options="{ group: 'default' }">
        <div v-for="item in items" :key="item.id">
          <TaskLaneItem :item="item" />
        </div>
      </Draggable>
    </div>
    <div class="card-footer text-muted">
      {{itemCount}}
    </div>
  </div>
</template>

<script>


export default {
  name: 'TaskLane',
  props: ['items', 'title', 'id'],
  components: {
    'TaskLaneItem': () => import('@/components/kanban/TaskLaneItem'),
    'Draggable': () => import('vuedraggable'),
  },
  computed: {
    itemCount() {
      if (!this.items) return '';
      if (this.items.length === 1) return '1 task';
      return `${this.items.length} tasks`;
    },
    draggables: {
      get() {
        return this.items;
      },
      set(items) {
        this.$store.commit('kanban/updateItems', {
          items,
          id: this.id,
        });
      },
    },
  },
};
</script>
<style>
.card-body > * {
  min-height: 50px;
}
</style>
