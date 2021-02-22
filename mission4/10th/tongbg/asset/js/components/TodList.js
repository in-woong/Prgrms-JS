import { isNew } from '../common/validateData.js'

function TodoList({ $App, initDodoList, onClickTodoList }) {
  if (isNew(new.target)) {
    this.todoData = initDodoList

    this.$todoListDOM = document.createElement('div')
    this.$todoListDOM.id = 'todo-list'
    $App.appendChild(this.$todoListDOM)

    this.$todoListDOM.addEventListener('click', onClickTodoList)
  }

  this.setState = (nextData) => {
    this.todoData = nextData
    this.render()
  }

  this.render = () => {
    this.$todoListDOM.innerHTML = this.todoData.map(({ content, isCompleted, _id }) => `<div class='todo-text' data-id=${_id}><div class="todo-checkbox${isCompleted ? ' checked' : ''}"></div><p ${isCompleted ? 'class=strket-text' : ''}>${content}</p><div class="del-btn"></div></div>`).join('')
  }

  this.render()
}

export default TodoList
