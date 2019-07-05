<!-- Componentes que carregam na HomeView -->
<template>
    <div>
        <div class="row left-align">
            <button class="btn waves-effect waves-light col grey darken-4" type="submit" name="action"
                    @click="!isCreating ? openForm() : closeForm()">

                <template v-if="!isCreating">
                    <span>Novo jogo</span>
                    <i class="material-icons right">expand_more</i>
                </template>

                <template v-else>
                    <span>Ocultar</span>
                    <i class="material-icons right">expand_less</i>
                </template>
            </button>
        </div>

        <div class="row" v-show="isCreating">
            <div class="card horizontal col s12">
                <div class="card-stacked">
                    <div class="card-content">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="title" type="text" v-model="titleText">
                                    <label for="title">Nome do jogo</label>
                                </div>
                                <div class="input-field col s6">
                                    <textarea id="description" class="materialize-textarea"
                                              v-model="descriptionText"></textarea>
                                    <label for="description">Informações</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="switch col">
                                    <label>
                                        Jogando
                                        <input type="checkbox" v-model="doneCheck">
                                        <span class="lever"></span>
                                        Zerado
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-action">
                        <div class="row">
                            <button class="btn waves-effect waves-light col right deep-purple darken-4" name="action" @click="closeForm()">
                                Cancelar
                                <i class="material-icons right">cancel</i>
                            </button>
                            <div class="col right"></div>
                            <button class="btn waves-effect waves-light col right deep-purple darken-4" type="submit" name="action"
                                    @click="sendForm()">
                                Adicionar
                                <i class="material-icons right">check_circle</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'CriarJogo',

    data: function () {
      return {
        isCreating: false,
        titleText: '',
        descriptionText: '',
        doneCheck: false,
      }
    },

    methods: {
      ...mapActions('jogos', [
        'CRIAR_JOGO',
      ]),

      openForm: function () {
        this.isCreating = true
      },

      closeForm: function () {
        this.titleText = ''
        this.descriptionText = ''
        this.doneCheck = false
        this.isCreating = false
      },

      sendForm: function () {
        var jogo = {
          title: this.titleText,
          description: this.descriptionText,
          done: this.doneCheck,
        }

        this.CRIAR_JOGO(jogo)

        this.closeForm()
      }
    }
  }
</script>

<style scoped>

</style>