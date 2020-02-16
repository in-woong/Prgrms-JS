const data = [
    {
      text: 'JS 공부하기',
      isCompleted: false
    },
    {
      text: 'JS 복습하기',
      isCompleted: true
    }
  ]

const todoList = new TodoList(data, document.getElementById('todo-list'));
const todoInput = new TodoInput(todoList, document.getElementById('todo-input'))
