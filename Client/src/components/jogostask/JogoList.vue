<template>
    <div>
        <div class="row">
            <div class="col s12 l5">
                <h3>Zerados ({{ jogosZeradosCount }})</h3>
                <ul class="collection">
                    <jogo v-for="todo in jogosZerados" :todo="todo" :key="todo.id"></jogo>
                </ul>
            </div>

            <div class="col col-content l2 hide-on-med-and-down"></div>

            <div class="col s12 l5">
                <h3>Jogando({{ naoZeradoJogosCount }})</h3>
                <ul class="collection">
                    <jogo v-for="todo in naoZeradoJogos" :todo="todo" :key="todo.id"></jogo>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import draggable from 'vuedraggable'
  import Jogo from '@/components/jogostask/Jogo'

  export default {
    name: 'JogoList',

    components: {
      Jogo,
      draggable
    },

    computed: {
      ...mapGetters('home', [
        'todos',
        'jogosZerados',
        'jogosZeradosCount',
        'naoZeradoJogos',
        'naoZeradoJogosCount',
        'isLoading'
      ]),
    },
  }
</script>

<style scoped>

</style>