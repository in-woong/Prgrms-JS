const data = [
    {
      id: 1,
      text: 'JS 공부하기',
      isCompleted: false
    },
    {
      id: 2,
      text: 'JS 복습하기',
      isCompleted: true
    }
  ]

const todoList = new TodoList(data, document.getElementById('todo-list'));
const todoInput = new TodoInput(todoList, document.getElementById('todo-input'));
const todoEdit = new TodoEdit(todoList);