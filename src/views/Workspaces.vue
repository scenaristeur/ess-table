<template>
  <div class="backlog-view container">
    <p>Workspaces /
      <small style="color:white">Privacy : <b-button pill @click="togglePrivacy" size="sm" variant="primary">{{ privacy }}</b-button></small>
    </p>

    <NewItemForm namespace="workspace"/>
    <div class="card" v-for="w in workspaces" :key="w.url">
      <b-button class="card-block" @click.self="open(w)" style="text-align:left">
        <h5 class="card-title"  @click.self="open(w)"><span class="text-muted" >#</span>
          <span @click="open(w)">
            <Label :url="w.url" :tick='tick' />
          </span>
          <button type="button" class="close-button pull-right" @click="removeItem(w)">
            <span>&times;</span>
          </button>
          <!-- <span :class="badgeClass(item)">{{badgeText(item)}}</span> -->
        </h5>
      </b-button>
    </div>
  </div>
</template>

<script>
//https://auth0.com/blog/vuejs-kanban-board-the-development-process/
//import { mapState } from 'vuex';

// const badgeDetail = {
//   todo: {
//     text: 'to-do',
//     class: 'badge badge-light',
//   },
//   inProgress: {
//     text: 'in progress',
//     class: 'badge badge-info',
//   },
//   done: {
//     text: 'done',
//     class: 'badge badge-success',
//   },
// };

export default {
  name: 'Workspaces',
  components: {
    'NewItemForm': () => import('@/components/basic/NewItemForm'),
    'Label': () => import('@/components/basic/Label'),
    // 'BasesView': () => import('@/views/BasesView')
  },
  data() {
    return {
      tick: new Date(),
      souk_ws: [],
      url : undefined
    }
  },
  created(){
    if (this.$route.query.url != undefined ){
      this.url = this.$route.query.url
      console.info("URL1",this.url)
    }else{
      this.getWorkspaces()
    }


    //  this.$store.dispatch('table/getWorkspaces');
  },
  // computed: mapState({
  //   items: s =>  s.table.workspaces //s.workspace.workspaces //
  // }),
  watch: {
    privacy(){
      console.log(this.storage+this.privacy, this.storage)
      this.getWorkspaces()
    },
    storage(){
      console.log(this.storage+this.privacy)
      this.getWorkspaces()
    },
    workspaces(){
      console.log("must update workspaces in table", this.workspaces)
      this.tick = new Date()
    },
    url(){
      console.info("URL2",this.url)
      this.$store.commit('table/setTable', this.url)
      //this.$router.push({name: 'Tables', query: {url: this.url}})  // test http://127.0.0.1:8080/tables?url=https%3A%2F%2Fspoggy-test9.solidcommunity.net%2Fpublic%2Ftable%2Ftables%2F3e552f78-332d-40bb-98c7-0e0390e96837.ttl



    }

  },
  methods: {
    open(item){

      console.log(item)
      this.$router.push({name: 'Bases', query: {url: item.url}})
    },

    // async add(){
    //   this.$store.dispatch('table/addWorkspace', {path: this.path, name:"___workspace name___"})
    //   await this.$createWorkspace("___workspace name___")
    //   this.getWorkspaces()
    // //  this.testGroup()
    // },
    openWorkspace(url){
      this.$store.commit('table/setWorkspace', url)
    },
    // onRowSelected(r){
    //   console.log(r)
    //   this.$store.commit('table/setWorkspace', r[0])
    //   this.$router.push('Workspace')
    // },
    togglePrivacy(){
      this.$store.commit('table/togglePrivacy')
    },
    async getWorkspaces(){
      if (this.storage != null && this.url == undefined){
        this.$store.dispatch('table/getWorkspaces', this.storage+this.privacy+'/table/workspaces/')
        let souk_ws = await this.$getWorkspaces(this.storage+this.privacy+'/table/test/workspaces/')
        this.souk_ws = souk_ws.map(x => ({'name' : x.name, 'createdAt': x.createdAt, 'updatedAt': x.updatedAt, url: x.url})).sort((itemA, itemB) => new Date(itemA.updatedAt) - new Date(itemB.updatedAt));

        console.log(this.souk_ws)
      }

    },
    itemLane(item) {
      if (this.$store.state.workspace.items.todo.includes(item)) {
        return 'todo';
      } else if (this.$store.state.workspace.items.inProgress.includes(item)) {
        return 'inProgress';
      }

      return 'done';
    },
    // badgeText(item) {
    //   const lane = this.itemLane(item);
    //   return badgeDetail[lane].name;
    // },
    // badgeClass(item) {
    //   const lane = this.itemLane(item);
    //   return `${badgeDetail[lane].class} pull-right`;
    // },
    removeItem(item) {
      this.$store.commit('workspace/removeItem', item);
    }
  },
  computed:{
    workspaces: {
      get: function() { return this.$store.state.table.workspaces},
      set: function() {}
    },
    storage: {
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
    path: {
      get: function() { return this.storage+this.privacy+'/table/workspaces/'},
      set: function() {}
    },
    privacy: {
      get: function() { return this.$store.state.table.privacy},
      set: function() {}
    },
  }
};
</script>
