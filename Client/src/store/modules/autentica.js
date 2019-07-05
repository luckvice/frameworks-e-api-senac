import ApiService from '@/common/api.service'
import JwtService from '@/common/jwt.service'

const state = {//Tentativa 2 de verificar Token
  errors: null,
  user: {},
  estaLogado: !!JwtService.getToken()
}

const getters = {
  currentUser (state) {//Declara o estado do usuario
    return state.user
  },

  estaLogado (state) {//verifica se está logado
    return state.estaLogado 
  }
}

//call actions para a API
const actions = {
  async REGISTRAR (context, credentials) {//Registra usuario 
    try {
      const {data} = await ApiService.post('auth/registrar', credentials)
      context.commit('SET_AUTH', data)
    } catch ({response}) {
      context.commit('SET_ERROR', JSON.parse(response.data))
      throw new Error(JSON.parse(response.data))
    }
  },

  async LOGIN (context, credentials) {//Login usuario
    return new Promise(resolve => {
      ApiService.post("auth/login", credentials)
        .then(({ data }) => {
          context.commit('SET_AUTH', data)
          resolve(data);
        })
        .catch(({ response }) => {
          console.log(JSON.parse(response))//Logger
        });
    });
  },
//FIX CHECK token (Não emplementado corretamente)
  async CHECK_AUTH (context) {
    if (JwtService.getToken()) {
      ApiService.setHeader()

      try {
        const {data} = await ApiService.post('auth/me')
        context.commit('SET_AUTH', data)
      } catch ({response}) {
        context.commit('SET_ERROR', JSON.parse(response.data))
        throw new Error(JSON.parse(response.data))
      }
    } else {
      context.commit('PURGE_AUTH')
    }
  },

  LOGOUT (context) {
    context.commit('PURGE_AUTH')
  },
}

const mutations = {//Mensagens de erro nao implmentado
  SET_ERROR (state, error) {
    state.errors = error
  },

  SET_AUTH (state, params) {
    state.estaLogado = true
    state.user = params.user
    state.errors = {}
    JwtService.saveToken(params.access_token)
  },

  PURGE_AUTH (state) {//Renova o estado para deslogar zera variaveis
    state.estaLogado = false
    state.user = null
    state.errors = {}
    JwtService.destroyToken()
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}