function TodoList({ elementId, todos, removeTodo, toggleTodo }) {
  validateConstructor(this, TodoList)
  validateTodos(todos)

  this.todos = todos
  this.$target = document.querySelector(`#${elementId}`)

  this.render = () => {
    const $todoList = document.createElement('div')
    $todoList.addEventListener('click', (event) => {
      if (!event.target) {
        return
      }

      const className = event.target.className
      const $li = event.path.find(({ tagName }) => tagName === 'LI')
      const todoId = $li.id

      switch (className) {
        case ('todo-item-text', 'todo-item-checkbox'): {
          toggleTodo(todoId)
          break
        }

        case 'remove-todo-button': {
          removeTodo(todoId)
          break
        }
      }
    })

    for (const { isCompleted, text, id } of this.todos) {
      const $todoItem = document.createElement('li')
      $todoItem.id = id

      const $todoItemCheckbox = document.createElement('input')
      $todoItemCheckbox.className = 'todo-item-checkbox'
      $todoItemCheckbox.setAttribute('type', 'checkbox')
      $todoItemCheckbox.checked = isCompleted
      $todoItem.appendChild($todoItemCheckbox)

      const $todoItemContent = document.createElement(
        isCompleted ? 'del' : 'span'
      )
      $todoItemContent.className = 'todo-item-text'
      $todoItemContent.innerHTML = text
      $todoItem.appendChild($todoItemContent)

      const $removeTodoButton = document.createElement('button')
      $removeTodoButton.className = 'remove-todo-button'
      $removeTodoButton.innerHTML = 'X'
      $todoItem.appendChild($removeTodoButton)

      $todoList.appendChild($todoItem)
    }

    this.$target.innerHTML = ''
    this.$target.appendChild($todoList)
  }

  this.setState = (newTodos) => {
    validateTodos(newTodos)

    this.todos = newTodos
    this.render()
  }

  this.render()
}
