import { TODO_ITEM_STATUS_ENUM } from '../constants/index.js'
import { Core } from './Core.js'

export class TodoItems extends Core {
  template() {
    const { todos } = this.$props

    return `<ul class="list-box">
      ${
        todos
          ? todos
              .map(
                (todo) =>
                  `<li class='list-box__item' data-key="${todo.id}">
                    <p class="list-box__item__text">${
                      todo.isCompleted ? `<s>${todo.text}</s>` : todo.text
                    }</p>
                    <button type="button" class="list-box__item__delete-btn">삭제</button>
                  </li>`
              )
              .join('')
          : `<li class='list-box__item'><p class='list-box__item__text'>할 일을 추가해랏!</p></li>`
      }
    </ul>`
  }

  setEvent() {
    const { deleteTodo, updateTodo } = this.$props

    this.addEvent('click', '.list-box__item__text', ({ target }) => {
      updateTodo(
        target.closest('[data-key]').dataset.key,
        TODO_ITEM_STATUS_ENUM['DONE']
      )
    })

    this.addEvent('click', '.list-box__item__delete-btn', ({ target }) => {
      deleteTodo(target.closest('[data-key]').dataset.key)
    })
  }
}
