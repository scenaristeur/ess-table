<template>
  <div class="solid-track-session" v-if="user != null">
<i><small>Logged as : <a v-bind:href="webId" target="_blank">{{ user }}</a></small></i>
  </div>
</template>

<script>
import auth from 'solid-auth-client';

export default {
  name: 'SolidTrackSession',
  data: function () {
    return {
      user: null,
      webId: null
    }
  },
  created(){
    auth.trackSession(async session => {
      if (!session){
        this.user = null
        console.log('The user is not logged in')
        this.$store.dispatch('solid/setWebId', null)
      } else{
        this.webId = session.webId
        this.user = session.webId.split('/').slice(2,3)[0]
        console.log(`The user is ${session.webId}`)
        this.$store.dispatch('solid/setWebId', this.webId)
      }
    })
  },
}
</script>
