import { JogosService } from '@/common/api.service'

// call actions para jogos
const actions = {
  async CRIAR_JOGO (context, todo) {
    await JogosService.create(todo)

    context.dispatch('home/JOGOS_FETCH', {}, {root: true})
  },

  async TODO_DELETE (context, todo) {
    await JogosService.delete(todo.id)

    context.dispatch('home/JOGOS_FETCH', {}, {root: true})
  },

  async JOGO_UPDATE (context, params) {
    await JogosService.update(params.id, params.updatedFields)

    context.dispatch('home/JOGOS_FETCH', {}, {root: true})
  }
}

// export
export default {
  namespaced: true,
  actions,
}