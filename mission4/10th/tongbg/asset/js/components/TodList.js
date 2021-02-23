import { isNew } from '../common/validateData.js'

function TodoList({ $App, initTodoList, onClickTodoList }) {
  if (isNew(new.target)) {
    this.todoList = initTodoList

    this.$todoListDOM = document.createElement('div')
    this.$todoListDOM.id = 'todo-list'
    $App.appendChild(this.$todoListDOM)

    this.$todoListDOM.addEventListener('click', onClickTodoList)
  }

  this.setState = (nextState) => {
    this.todoList = nextState
    this.render()
  }

  this.render = () => {
    this.$todoListDOM.innerHTML =
      this.todoList.length > 0 ? this.todoList.map(({ content, isCompleted, _id }) => `<div class='todo-text' data-id=${_id}><div class="todo-checkbox${isCompleted ? ' checked' : ''}"></div><p ${isCompleted ? 'class=strket-text' : ''}>${content}</p><div class="del-btn"></div></div>`).join('') : ''
  }

  this.render()
}

export default TodoList
