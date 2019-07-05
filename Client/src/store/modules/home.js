import { JogosService } from '@/common/api.service'


//Todo done e notDone feito baseado no tutorial 

// state
const state = {
  todos: [],
  isLoading: false,
}

// getters
const getters = {
  todos: state => {
    return state.todos
  },

  jogosZerados: state => {//Baseado no todo vuefy 
    return state.todos.filter(function (todo) {
      return todo.done === true || todo.done === 1
    })
  },

  jogosZeradosCount: (state, getters) => {
    return getters.jogosZerados.length
  },

  naoZeradoJogos: state => {
    return state.todos.filter(function (todo) {
      return todo.done === false || todo.done === 0
    })
  },

  naoZeradoJogosCount: (state, getters) => {
    return getters.naoZeradoJogos.length
  },

  isLoading: (state) => {//Lazy load nao implementado
    return state.isLoading
  }
}

// actions
const actions = {
  JOGOS_FETCH ({commit}) {//Carrega os dados
    commit('FETCH_START')
    return JogosService.get()
      .then(({data}) => {
        commit('FETCH_END', data)
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}

// mutations
const mutations = {
  FETCH_START (state) {
    state.isLoading = true
  },

  FETCH_END (state, todos) {
    state.isLoading = false
    state.todos = todos
  },
}

// export
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}