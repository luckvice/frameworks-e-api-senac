import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' //Bilioteca HTTP
import JwtService from '@/common/jwt.service'

import { API_URL } from '@/common/config'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL//
  },

  setHeader () {
    Vue.axios.defaults.headers.common[ //Setando header Hardcoded
      'Content-Type'
      ] = 'application/json'

    Vue.axios.defaults.headers.common[
      "Accept"
      ] = 'application/json';

    Vue.axios.defaults.headers.common[
      "Authorization"
      ] = `Bearer ${JwtService.getToken()}`;//Verificação token (Não implementando)
  },

  query (resource, params) {//Metodo do get de parametros de url
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },

  get (resource, id = '') {//GambiFix
    return Vue.axios.get(`${resource}/${id}`).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },

  post (resource, params) {//Metodo post
    return Vue.axios.post(`${resource}`, params)
  },

  update (resource, id, params) {//update (PUT)
    return Vue.axios.put(`${resource}/${id}`, params)
  },

  put (resource, params) {//PUT tradicional
    return Vue.axios.put(`${resource}`, params)
  },

  delete (resource, id = '') {//deleta
    return Vue.axios.delete(`${resource}/${id}`).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  }
}


/*CAMINHOS DA API LARAVEL localhost/api/* */ 
export default ApiService

export const JogosService = {
  get (id) {
    return ApiService.get('jogos', id)
  },

  create (params) {
    return ApiService.post('jogos', params)
  },

  delete (id) {
    return ApiService.delete('jogos', id)
  },

  update (id, params) {
    return ApiService.update('jogos', id, params)
  },
}