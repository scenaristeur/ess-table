<template>
  <div class="menubar">
    <div class="btn-group" role="group" aria-label="Menu bar">
      <router-link to="/board" :class="buttonClass('/board')">Board ...</router-link>
      <router-link to="/backlog" :class="buttonClass('/backlog')">Backlog ...</router-link>
      <SolidLoginButton />
      <router-link to="/workspaces" :class="buttonClass('/workspaces')">Workspaces ...</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuBar',
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
  },
  methods: {
    buttonClass(path) {
      return {
        btn: true,
        'btn-primary': this.$route.path === path,
        'btn-secondary': this.$route.path !== path
      };
    }
  }
};
</script>
<style>
.menubar {
  margin-bottom: 16px;
}
</style>
