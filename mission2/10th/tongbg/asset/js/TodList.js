import validateData, { isNew, checkDom } from './validateData.js'

function renderTodo({ text, isCompleted }, idx) {
  return `<div class="todo-text" data-idx=${idx}>
            ${isCompleted ? `<div class="todo-checkbox checked"></div><p class="strket-text">${text}</p>` : `<div class="todo-checkbox"></div><p>${text}</p>`}
            <div class="del-btn"></div>
          </div>`
}

function TodoList({ todoData, parentDOM, listHandler }) {
  if (isNew(new.target)) {
    if (todoData.length !== 0) validateData(todoData)
    checkDom(parentDOM)
    parentDOM.addEventListener('click', listHandler)
  }

  this.render = () => {
    validateData(todoData)
    parentDOM.innerHTML = todoData.map(renderTodo).join('')
  }

  this.setState = (nextData) => {
    todoData = validateData(nextData)
    localStorage.setItem('todoData', JSON.stringify(todoData))

    this.render()
  }

  this.render()
}

export default TodoList
