import validateData, { isNew } from '../common/validateData.js'

function TodoList({ $App, initData, onClickTdoList }) {
  if (isNew(new.target)) {
    if (initData.length !== 0) validateData(initData)
    this.todoData = initData

    this.$todoListDOM = document.createElement('div')
    this.$todoListDOM.id = 'todo-list'
    $App.appendChild(this.$todoListDOM)

    this.$todoListDOM.addEventListener('click', onClickTdoList)
  }

  this.setState = (nextData) => {
    this.todoData = validateData(nextData)
    this.render()
  }

  this.render = () => {
    this.$todoListDOM.innerHTML = this.todoData.map(({ text, isCompleted }) => `<div class='todo-text'><div class="todo-checkbox${isCompleted ? ' checked' : ''}"></div><p ${isCompleted ? 'class=strket-text' : ''}>${text}</p><div class="del-btn"></div></div>`).join('')
  }

  this.render()
}

export default TodoList
