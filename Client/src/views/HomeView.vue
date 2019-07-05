<template>
    <div>
        <CriarJogo/>
        <JogoList></JogoList>
    </div>
</template>

<script>
  import store from '@/store'
  import { mapGetters } from 'vuex'
  import JogoList from '@/components/jogostask/JogoList'// Importa a lista de games
  import CriarJogo from '@/components/jogostask/CriarJogo'//Componente Criar jogo Card

  export default {
    name: 'HomeView',

//Carrega os componentes
    components: {
      CriarJogo,
      JogoList
    },

    beforeRouteEnter (to, from, next) {//carrega lista
      store.dispatch('home/JOGOS_FETCH').then(() => {
        next()
      })
    },
  }
</script>

<style scoped>

</style>