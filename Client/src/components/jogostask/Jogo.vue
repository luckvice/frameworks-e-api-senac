<template>
    <li class="collection-item">
        <div class="left-align" v-show="!isEditing">
            <label>
                <input class="grey darken-4" type="checkbox" v-model="todoDone"/>
                <span><strong>{{ todo.title }}</strong></span>
            </label>

            <p>{{ todo.description }}</p>
        </div>
        <div class="right-align" v-show="!isEditing">
            <a class="waves-effect waves-light btn-small grey darken-4"
               @click="openForm()"><i class="material-icons">mode_edit</i></a>
            <a class="waves-effect waves-light btn-small red accent-2"
               @click="sendDeleteJogo()"><i class="material-icons">delete</i></a>
        </div>

        <form v-show="isEditing">
            <div class="left-align">
                <div class="input-field col s6">
                    <input id="title" type="text" v-model="titleText">
                    <label for="title" class="active">Titulo</label>
                </div>
                <div class="input-field col s6">
                    <textarea id="description" class="materialize-textarea" v-model="descriptionText"></textarea>
                    <label for="description" class="active">Informações</label>
                </div>
            </div>

            <div class="right-align">
                <a class="waves-effect waves-light btn-small"
                   @click="sendUpdateJogo()"><i class="material-icons">check_circle</i></a>
                <a class="waves-effect waves-light btn-small red accent-2"
                   @click="closeForm()"><i class="material-icons">cancel</i></a>
            </div>
        </form>
    </li>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Jogo',

    props: ['todo'],

    data: function () {
      return {
        isEditing: false,
        titleText: '',
        descriptionText: '',
      }
    },

    computed: {
      todoDone: {
        get () {
          return this.todo.done
        },
        set () {
          this.sendToggleJogo()
        }
      },
    },

    methods: {
      ...mapActions('jogos', [
        'JOGO_UPDATE',
        'TODO_DELETE'
      ]),

      openForm: function () {
        this.isEditing = true
        this.titleText = this.todo.title
        this.descriptionText = this.todo.description
      },

      closeForm: function () {
        this.isEditing = false
        this.titleText = ''
        this.descriptionText = ''
      },

      sendUpdateJogo: function () {
        this.JOGO_UPDATE({
          id: this.todo.id,
          updatedFields: {
            title: this.titleText,
            description: this.descriptionText
          }
        })

        this.closeForm()
      },

      sendToggleJogo: function () {
        this.JOGO_UPDATE({
          id: this.todo.id,
          updatedFields: {
            done: this.todo.done ? 0 : 1
          }
        })
      },

      sendDeleteJogo: function () {
        this.TODO_DELETE(this.todo)
      },
    },
  }
</script>

<style scoped>

</style>