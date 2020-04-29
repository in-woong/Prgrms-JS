let data = [
  {
    text: 'JS 공부하기',
  },
  {
    text: 'JS 복습하기',
  },
]

function TodoList(data) {
  this.todos = data
  this.render = function () {
    this.todos.forEach((todo) => {
      document.querySelector(
        '#todo-list'
      ).innerHTML += `<div>${todo.text}</div>`
    })
  }
}

const todoList = new TodoList(data)
todoList.render()
