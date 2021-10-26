function createError({ type }) {
  const errorMessages = {
    array: '파라미터가 배열이 아닙니다',
    text: 'text의 타입이 string이 아닙니다',
  }

  throw new Error(errorMessages[type])
}

class TodoList {
  constructor({ selector, data }) {
    this.data = data
    this.selector = selector

    document.querySelector(selector).addEventListener('click', ({ target }) => {
      const clickedTodoId = target.closest('li').dataset.todoId
      const todoText = target.closest('.todo-text')
      const removeButton = target.closest('.remove-button')

      if (todoText) {
        const updateTodos = this.data.map((currentTodo) => {
          const currentTodoCompleted = currentTodo.isCompleted
          const isCompleted =
            currentTodo.id === clickedTodoId
              ? !currentTodoCompleted
              : currentTodoCompleted

          return {
            ...currentTodo,
            isCompleted,
          }
        })

        this.setState(updateTodos)
      }

      if (removeButton) {
        const updateTodos = this.data.filter(
          (todo) => todo.id !== clickedTodoId
        )

        this.setState(updateTodos)
      }
    })

    this.render()
  }

  setState(data) {
    this.data = data

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
    const { selector, data } = this

    this.checkParameter(data)

    document.querySelector(selector).innerHTML = data
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
