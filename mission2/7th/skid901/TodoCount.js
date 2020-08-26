function TodoCount(todoApp) {
  const todoCountElement = document.createElement('div')

  this.render = () => {
    todoCountElement.innerHTML = `[
      completed / total : 
      ${todoApp.states.filter(({ isCompleted }) => isCompleted).length} / ${todoApp.states.length}
     ]`
  }

  todoApp.todoAppElement.append(todoCountElement)
}
