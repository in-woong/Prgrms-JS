import errorCheck from './errorCheck.js'

export default function TodoList(todos, toggleTodo, removeTodo, removeAllTodo) {
  errorCheck.isInvalidInstance(this, TodoList)
  this.$todoList = document.getElementById('todo-list')
  this.todos = todos
  this.toggleTodo = toggleTodo
  this.removeTodo = removeTodo
  this.removeAllTodo = removeAllTodo

  this.setState = function(nextData) {
    this.todos = nextData
    this.render()
  }

  this.onClick = e => {
    const clickedNode = e.target.nodeName
    const clickedIndex = e.target.id
    if (clickedNode === 'LI' || clickedNode === 'STRIKE')
      this.toggleTodo(clickedIndex)
    else if (clickedNode === 'BUTTON') this.removeTodo(clickedIndex)
  }

  this.render = () => {
    this.$todoList.innerHTML = `<ul>${this.todos
      .map((todo, index) =>
        todo.isCompleted
          ? ` <li id=${index}>${todo.text}<button id=${index} class="todo-btn">삭제</button></li><hr/>`
          : `<li><strike id=${index}>${todo.text}</strike><button id=${index} class="todo-btn">삭제</button></li><hr/>`
      )
      .join('')}<ul>`
  }
  this.$todoList.addEventListener('click', this.onClick)
  this.$todoList.addEventListener('removeAll', this.removeAllTodo)
}
