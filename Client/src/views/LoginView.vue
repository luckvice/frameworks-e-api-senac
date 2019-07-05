<!-- View logar usuario-->
<template>
    <div>
        <LoginUser/>
    </div>
</template>

<script>
  import store from '@/store'
  import { mapGetters } from 'vuex'
  import LoginUser from '@/components/login/LoginUsuario'

  export default {
    name: 'LoginView',

    components: {
      LoginUser
    },
  }
</script>

<style scoped>

</style>