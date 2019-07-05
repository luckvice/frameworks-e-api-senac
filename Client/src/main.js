//Materialize template vue

import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import Toasted from 'vue-toasted';

import ApiService from '@/common/api.service'

import 'materialize-css/dist/js/materialize.min'
import 'materialize-css/dist/css/materialize.min.css'

window.jQuery = $
window.$ = $

/* Initialize the navbar */
$(document).ready(function () {
  $('.sidenav').sidenav()
})

Vue.use(Toasted)

Vue.config.productionTip = false

/* Initialize the API service. */
ApiService.init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
