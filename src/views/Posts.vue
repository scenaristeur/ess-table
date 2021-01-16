<template>
  <div id="app" class="text-gray-900 p-6 antialiased leading-tight">
    <UserCard
      v-for="user of users"
      :key="user.id"
      class="border-gray border p-2 mb-4 rounded"
      :user="user"
    />
    <div class="flex items-center mb-4">
      <input
        v-model="newUserName"
        class="bg-white focus:outline-0 focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block mr-2 appearance-none leading-normal"
        type="text"
        placeholder="User name..."
      >
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        @click="createUser"
      >Create User</button>
    </div>
    <button
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      type="button"
      @click="clearData"
    >Clear Data</button>
  </div>
</template>

<script>
import Soukai, { LogEngine, LocalStorageEngine } from "soukai";

import User from "@/models/User";

import UserCard from "@/components/UserCard.vue";

export default {
  name: "App",
  components: {
    UserCard
  },
  data() {
    return {
      users: [],
      newUserName: "",
      engine: null
    };
  },
  async created() {
    this.engine = new LocalStorageEngine();

    Soukai.useEngine(new LogEngine(this.engine));

    this.users = await User.all();

    for (const user of this.users) {
      await user.loadRelation("posts");
    }
  },
  methods: {
    async createUser() {
      if (this.newUserName.length > 0) {
        const user = await User.create({ name: this.newUserName });
        this.users.push(user);
        this.newUserName = "";
      }
    },
    clearData() {
      this.users = [];
      this.engine.clear();
    }
  }
};
</script>
