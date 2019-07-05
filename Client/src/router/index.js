import Vue from 'vue'
import store from '@/store'//Metodos de envio e persistencia de dados
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',//Mantem o historico do navegador

  linkActiveClass: 'active',

  //Rotas
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView'),
      beforeEnter: checkAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView'),
      beforeEnter: checkGuest
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/RegistrarView'),
      beforeEnter: checkGuest
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

async function checkAuth (to, from, next) { //Função verifica se está logado By github
  await store.dispatch('autentica/CHECK_AUTH')

  if (store.getters['autentica/estaLogado']) {
    next()
  } else {
    next({
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  }
}

async function checkGuest (to, from, next) {//Função verifica se está logado By github
  if (!store.getters['autentica/estaLogado']) {
    next()
  } else {
    next({
      name: 'Home',
      query: { redirect: to.fullPath }
    })
  }
}