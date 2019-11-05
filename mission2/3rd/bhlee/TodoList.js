function TodoList(elementId, onToggle, onRemove) {
  if (this.constructor !== TodoList) {
    throw new Error('TodoList should be called by new keyword')
  }

  if (!elementId || typeof elementId !== 'string') {
    throw new Error('elementId is undefined or not string type')
  }

  const todoListElemId = `${elementId}-todo`
  const todoItemElemIdPrefix = `${elementId}-todo`
  const todoTextElemIdPrefix = `${elementId}-todo-text`
  const todoRemoveButtonElemIdPrefix = `${elementId}-todo-remove-button`

  const toggleTodo = (id) => onToggle(id)

  const removeTodo = (id) => onRemove(id)

  const createTodoTextHtml = (todo) => {
    if (todo.isCompleted) {
      return `<strike id=${todoTextElemIdPrefix}-${todo.id}>${todo.text}</strike>`
    }
    return `<sapn id=${todoTextElemIdPrefix}-${todo.id}>${todo.text}</sapn>`
  }

  const createHtml = (nextData) => {
    let acc = ''

    for (let todo of nextData) {
      acc += `
            <li id=${todoItemElemIdPrefix}-${todo.id}>
               ${createTodoTextHtml(todo)}
               <button id=${todoRemoveButtonElemIdPrefix}-${todo.id}>삭제</button>
            </li>
          `
    }

    document.getElementById(elementId).innerHTML = `<ul id=${todoListElemId}>${acc}</ul>`
  }

  const createEventHandler = () => {
    document.getElementById(todoListElemId)
            .addEventListener('click', (e) => {
              const targetId = e.target.id
              const splitTargetId = targetId.split('-')
              const id = parseInt(splitTargetId[splitTargetId.length - 1], 10)

              if (targetId.startsWith(todoTextElemIdPrefix)) {
                toggleTodo(id)
              }

              if (targetId.startsWith(todoRemoveButtonElemIdPrefix)) {
                removeTodo(id)
              }
            })
  }

  this.render = (nextData) => {
    createHtml(nextData)
    createEventHandler()
  }

  this.setState = (nextData) => {
    validateData(nextData)
    this.render(nextData)
  }
}


