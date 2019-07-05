
<!-- Componente criar novo usuario /registrar -->
<template>
    <div class="row">
        <form>
            <div class="card horizontal col s12 l8 xl6 offset-l2 offset-xl3">
                <div class="card-stacked">
                    <div class="card-content">
                        <form class="col">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="name" type="text" v-model="nameText">
                                    <label for="name">Nome</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="email" type="text" v-model="emailText">
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="password" type="password" v-model="passwordText">
                                    <label for="email">Senha</label>
                                </div>
                                <div class="col s12">
                                    <label>
                                        <input type="checkbox" class="filled-in" v-model="termsCheck"/>
                                        <span>Criando esta conta você concorda ?
                                        <a href="#">Termos de uso</a>
                                    </span>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-action">
                        <div class="row">
                            <div class="col right"></div>
                            <button class="btn waves-effect waves-light col s12 right grey darken-4" type="button"
                                    @click="sendForm()">
                                Criar conta
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'CreateUser',

    data: function () {
      return {
        nameText: '',
        emailText: '',
        passwordText: '',
        termsCheck: false,
      }
    },

    methods: {
      ...mapActions('autentica', [
        'REGISTRAR',
      ]),

      sendForm () {
        if (! this.termsCheck) { return }

        this.REGISTRAR({
          name: this.nameText,
          email: this.emailText,
          password: this.passwordText
        })
        .then(() => this.$router.push({ name: "Home" }));//Apos registrar redireciona para home
      },
    }
  }
</script>

<style scoped>

</style>