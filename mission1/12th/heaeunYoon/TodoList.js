function createError({ type }) {
  const errorMessages = {
    array: '파라미터가 배열이 아닙니다',
    text: 'text의 타입이 string이 아닙니다',
  }

  throw new Error(errorMessages[type])
}

class TodoList {
  constructor({ $app, state, onDeleteTodoButtonClick, onTodoClick }) {
    this.state = state
    this.$app = $app

    this.$target = document.createElement('ul')
    this.$app.appendChild(this.$target)

    this.$target.addEventListener('click', ({ target }) => {
      const clickedTodoId = target.closest('li').dataset.todoId

      if (target.closest('.todo-text')) {
        onTodoClick({ clickedTodoId })
      }

      if (target.closest('.remove-button')) {
        onDeleteTodoButtonClick({ clickedTodoId })
      }
    })

    this.render()
  }

  setState(nextState) {
    this.state = nextState

    this.render()
  }

  checkParameter(data) {
    if (!Array.isArray(data)) {
      createError({ type: 'array' })
    }
  }

  checkTextType(text) {
    if (typeof text !== 'string') {
      createError({ type: 'text' })
    }
  }

  render() {
    const { state } = this

    this.checkParameter(state)

    this.$target.innerHTML = state
      .map(({ text, isCompleted, id }) => {
        this.checkTextType(text)

        return `<li data-todo-id="${id}">
          <span class="todo-text">${
            isCompleted ? `<s>${text}</s>` : `${text}`
          }</span>
          <button class="remove-button" type="button"}>삭제</button>
        </li>`
      })
      .join('')
  }
}

export default TodoList
