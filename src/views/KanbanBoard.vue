<template>
  <div class="board">
    <div class="row">
      <div class="col-md">
        <TaskLane id="todo" title="To-Do" :items="todoItems" />
      </div>
      <div class="col-md">
        <TaskLane id="inProgress" title="In progress" :items="inProgressItems" />
      </div>
      <div class="col-md">
        <TaskLane id="done" title="Done" :items="doneItems" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'KanbanBoard',
  components: {
    'TaskLane': () => import('@/components/kanban/TaskLane'),
  },
  computed: mapState({
    todoItems: s => s.kanban.items.todo,
    inProgressItems: s => s.kanban.items.inProgress,
    doneItems: s => s.kanban.items.done,
  }),
};
</script>
