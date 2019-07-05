<!-- Top header -->

<template>
    <div>
        <nav class="grey darken-4">
            <div class="nav-wrapper">
                <div class="container">
                    <router-link :to="{name: 'Home'}" class="brand-logo">LTSG - Luck Task System Gaming</router-link>
                    <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul v-if="!estaLogado" class="right hide-on-med-and-down">
                        <router-link tag="li" :to="{name: 'Login'}"><a>Logar</a></router-link>
                        <router-link tag="li" :to="{name: 'Register'}"><a>Registrar</a></router-link>
     
                    </ul>
                    <ul v-else class="right hide-on-med-and-down">
                        <li><a>Bem vindo, {{ currentUser.name }}</a></li>
                        <li><a @click="logout()">Deslogar</a></li>
                      
                    </ul>
                </div>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-nav">
            <div v-if="!estaLogado">
                <router-link tag="li" :to="{name: 'Login'}"><a>Logar</a></router-link>
                <router-link tag="li" :to="{name: 'Register'}"><a>Registrar</a></router-link>
            </div>
            <div v-else>
                <li><a>Bem vindo, {{ currentUser.name }}</a></li>
                <li><a @click="logout()">Deslogar</a></li>
            </div>
          
        </ul>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    name: "Navbar",

    computed: {
      ...mapGetters('autentica',
        ['currentUser', 'estaLogado']//Carrega as variaveis, se está logado e a id do usuario logado
      )
    },

    methods: {
      ...mapActions('autentica',
        ['LOGOUT']
      ),

      logout() {
        this.LOGOUT().then(() => {
          this.$router.push({name: 'Login'})//Desloga e redireciona para a pagina de login
        })
      }
    }
  }
</script>

<style scoped>
/*Gambi Fix*/
    nav {
        margin-bottom: 60px;
    }

    a {outline : none;}
</style>