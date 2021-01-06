<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SolidLoginButton />
    <!-- <Table /> -->
    <HelloWorld msg="Welcome to Ess-table WebApp based on Solid Specifications"/>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    // 'Table': () => import('@/components/table/Table'),
  },
}
</script>
