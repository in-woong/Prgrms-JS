function TodoList(data, $todoList, onToggleTodo, onRemoveTodo) {
  if (!(this instanceof TodoList)) {
    throw new Error('TodoList must be called with new')
  }

  this.todos = data
  this.$todoList = $todoList

  const getElementWithGivenClassName = (element, className) => {
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
      const foundElem = getElementWithGivenClassName(elem, 'todo')
      const id = foundElem.getAttribute('todo-id')

      onToggleTodo(parseInt(id))
    } else if (elem.classList.contains('todo-remove')) {
      const foundElem = getElementWithGivenClassName(elem, 'todo')
      const id = foundElem.getAttribute('todo-id')

      onRemoveTodo(parseInt(id))
    }
  })

  const getTodosText = () =>
    this.todos
      .map(
        (todo, index) =>
          `<li class="todo" todo-id="${index}">
          ${
            todo.isCompleted
              ? `<s><span class="todo-text">${todo.text}</span></s>`
              : `<span class="todo-text">${todo.text}</span>`
          }
          <button class="todo-remove">X</button>
          </li>`
      )
      .join('')

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
