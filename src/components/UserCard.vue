<template>
  <div class="border-gray border p-6 mb-6 rounded">
    <h1 class="text-2xl font-bold mb-2">User: {{ user.name }}</h1>
    <h2 class="text-xl font-bold mb-2">Posts:</h2>
    <ul class="list-disc list-inside mb-2">
      <li v-for="post of (user.posts || [])" :key="post.id">{{ post.title }}</li>
    </ul>
    <div class="flex items-center">
      <input
        v-model="user.newPostTitle"
        class="bg-white focus:outline-0 focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block mr-2 appearance-none leading-normal"
        type="text"
        placeholder="Post title..."
      >
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        @click="createPost()"
      >Create Post</button>
    </div>
  </div>
</template>

<script>
import Post from "../models/Post";

export default {
  props: ["user"],
  methods: {
    async createPost() {
      if (this.user.newPostTitle.length > 0) {
        await Post.create({
          title: this.user.newPostTitle,
          authorId: this.user.id
        });

        this.user.loadRelation("posts");
        this.user.newPostTitle = "";
      }
    }
  }
};
</script>
