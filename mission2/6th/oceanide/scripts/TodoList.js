function TodoList(data, $todoList, toggleTodo, removeTodo) {
  if (!(this instanceof TodoList)) {
    throw new Error('TodoList must be called with new')
  }

  this.todos = data
  this.$todoList = $todoList

  const hasClass = (element, className) => {
    while (!element.classList.contains(className)) {
      element = element.parentNode

      if (element.nodeName === 'BODY') {
        element = null
        return
      }
    }
    return element
  }

  this.$todoList.addEventListener('click', (e) => {
    const elem = e.target

    if (elem.classList.contains('todo-text')) {
      const findedElem = hasClass(elem, 'todo')
      const id = findedElem.getAttribute('todo-id')

      toggleTodo(parseInt(id))
    } else if (elem.classList.contains('todo-remove')) {
      const findedElem = hasClass(elem, 'todo')
      const id = findedElem.getAttribute('todo-id')

      removeTodo(parseInt(id))
    }
  })

  const getTodosText = () => {
    return this.todos
      .map((todo, index) =>
        todo.isCompleted
          ? `<li class="todo" todo-id="${index}">
              <s><span class="todo-text">${todo.text}</span></s>
              <button class="todo-remove">X</button>
             </li>`
          : `<li class="todo" todo-id="${index}">
              <span class="todo-text">${todo.text}</span>
              <button class="todo-remove">X</button>
             </li>`
      )
      .join('')
  }

  this.render = function () {
    if (!$todoList) {
      throw new Error('$todoList must be injected')
    }
    $todoList.innerHTML = getTodosText()
  }

  this.setState = function (nextData) {
    this.todos = nextData

    $todoList.innerHTML = ''
    this.render()
  }

  this.render()
}

export default TodoList
