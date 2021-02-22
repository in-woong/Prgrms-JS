import validateData, { isNew } from '../common/validateData.js'

function TodoList({ $App, initData, onClickTodoList }) {
  if (isNew(new.target)) {
    // if (initData.length !== 0) validateData(initData)
    this.todoData = initData

    this.$todoListDOM = document.createElement('div')
    this.$todoListDOM.id = 'todo-list'
    $App.appendChild(this.$todoListDOM)

    this.$todoListDOM.addEventListener('click', onClickTodoList)
  }

  this.setState = (nextData) => {
    this.todoData = nextData // validateData(nextData)
    this.render()
  }

  this.render = () => {
    this.$todoListDOM.innerHTML = this.todoData.map(({ content, isCompleted, _id }) => `<div class='todo-text' data-id=${_id}><div class="todo-checkbox${isCompleted ? ' checked' : ''}"></div><p ${isCompleted ? 'class=strket-text' : ''}>${content}</p><div class="del-btn"></div></div>`).join('')
  }

  this.render()
}

export default TodoList
