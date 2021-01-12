<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SolidLoginButton />
    <HelloWorld />
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
  },

}
</script>
