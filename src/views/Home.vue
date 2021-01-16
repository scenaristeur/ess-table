<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SolidLoginButton />



    <Connected v-if="webId != null" />
    <Public v-else />

  <Posts />
    <!-- <HelloWorld /> -->

  </div>
</template>

<script>

//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  //  HelloWorld,
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'Connected': () => import('@/views/Connected.vue'),
    'Public': () => import('@/views/Public.vue'),
    'Posts': () => import('@/views/Posts.vue')
  },
  computed:{
    webId: {
      get: function() { return this.$store.state.solid.webId},
      set: function() {}
    },
  }

}
</script>
