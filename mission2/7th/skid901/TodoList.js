function TodoList(todoApp) {
  const todoListElement = document.createElement('ul')

  this.render = () => {
    todoListElement.innerHTML = todoApp.states.length ? todoApp.states
      .map(({ text, isCompleted, id }) => `
          <li data-state-id="${id}">
              <input type="checkbox" ${isCompleted ? 'checked' : ''}>
              ${isCompleted ? `<s>${text}</s>` : text}
              <input type="button" value="x">
          </li>
        `)
      .join('') : '<li>There is no todo. Please add todoes.</li>'
  }

  todoListElement.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target && event.target.nodeName === 'LI') {
      todoApp.toggleIsCompleted(event.target.dataset.stateId)
    }
    if (event.target && event.target.nodeName === 'S') {
      todoApp.toggleIsCompleted(event.target.parentNode.dataset.stateId)
    }
    if (event.target && event.target.nodeName === 'INPUT' && event.target.type === 'checkbox') {
      todoApp.toggleIsCompleted(event.target.parentNode.dataset.stateId)
    }
  })

  todoListElement.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target && event.target.nodeName === 'INPUT' && event.target.type === 'button') {
      todoApp.deleteState(event.target.parentNode.dataset.stateId)
    }
  })

  todoApp.todoAppElement.append(todoListElement)
}
