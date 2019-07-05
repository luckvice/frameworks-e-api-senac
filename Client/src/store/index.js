import Vue from 'vue'
import Vuex from 'vuex'
/*
  Carrega pagina principal

*/
import home from '@/store/modules/home'
import jogos from '@/store/modules/jogos'
import autentica from '@/store/modules/autentica'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// export
export default new Vuex.Store({
  modules: {
    home,
    jogos,
    autentica,
  },

  strict: debug
})
