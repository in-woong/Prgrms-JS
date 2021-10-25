var data = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const $target = document.querySelector('#todo-list')
const todoList = new TodoList($target, data)

const addTodo = () => {
  const todoInput = document.getElementById('todoInput').value;
  if (todoInput.length > 0) {
    this.data.push({ text: todoInput, isCompleted: false, });
    todoList.setState(this.data)
  }
  document.getElementById('todoInput').value = ''
}

const checkTodo = () => {
  const index = this.data.findIndex(i => i.text == 'dd')
  this.data[index].isCompleted = !this.data[index].isCompleted
}

const deleteTodo = () => {

}

