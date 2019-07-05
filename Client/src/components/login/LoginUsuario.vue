<!-- Componente logar-->
<template>
    <div class="row">
        <form>
            <div class="card horizontal col s12 l8 xl6 offset-l2 offset-xl3">
                <div class="card-stacked">
                    <div class="card-content">
                        <form>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="email" type="text" v-model="emailText">
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="password" type="password" v-model="passwordText">
                                    <label for="email">Senha</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-action">
                        <div class="row">
                            <div class="col right"></div>
                            <button class="btn waves-effect waves-light col s12 right grey darken-4" type="button"
                                    @click="sendForm()">
                                Logar
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
    name: 'LoginUsuario',
// Limpa form
    data: function () {
      return {
        emailText: '',
        passwordText: '',
      }
    },

    methods: {//Envia form
      ...mapActions('autentica', [
        'LOGIN',
      ]),

      sendForm () {
        this.LOGIN({
          email: this.emailText,
          password: this.passwordText
        })
        .then(() => {
          this.$router.push({ name: "Home" })//Redireciona para a homeview

          this.$toasted.show("Logou com sucesso!", { //Mensagem custom Meterialize
            theme: "bubble",
            position: "bottom-left",
            duration : 3000,
            icon : {
              name : 'check_circle'
            },
            className: ['deep-purple', 'darken-4']
          });
        })
      },
    }
  }
</script>

<style scoped>

</style>