import { Core } from './Core.js'

export class TodoItems extends Core {
  setup() {
    this.$state = { todos: this.$props.todos, user: this.$props.user }

    const element = document.createElement('div')
    element.dataset.component = 'todo-box'

    this.$target.appendChild(element)
    this.$target = element
  }

  template() {
    const { todos, user } = this.$state

    return `
    <h2>${user}</h2>
    <ul class="list-box">
      ${
        todos?.length !== 0
          ? todos
              .map(
                (todo) =>
                  `<li class='list-box__item' data-key="${todo._id}">
                    <p class="list-box__item__text">${
                      todo.isCompleted ? `<s>${todo.content}</s>` : todo.content
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
    const { deleteTodo, updateTodoIsCompleted } = this.$props

    this.addEvent('click', '.list-box__item__text', ({ target }) => {
      updateTodoIsCompleted(target.closest('[data-key]').dataset.key)
    })

    this.addEvent('click', '.list-box__item__delete-btn', ({ target }) => {
      deleteTodo(target.closest('[data-key]').dataset.key)
    })
  }
}
