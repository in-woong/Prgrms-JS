import { Core } from './Core.js'
import { dispatchRemoveAll } from '../utils/customEvent.js'

export class TodoInput extends Core {
  template() {
    return `
      <input type="text" autofocus/>
      <button type="submit">등록</button>
      <button type="button" class="remove-all__btn">모든 할 일 지우기👋</button>
    `
  }

  setEvent() {
    const { addTodo, removeAllTodo } = this.$props
    const $input = this.$target.querySelector('input')

    this.$target.addEventListener('submit', (e) => {
      e.preventDefault()
      const value = $input.value.trim()

      if (!value) {
        return
      }
      addTodo(value)
      $input.value = ''
    })

    window.addEventListener('removeAll', () => {
      removeAllTodo()
    })

    this.addEvent('click', '.remove-all__btn', dispatchRemoveAll)
  }
}
