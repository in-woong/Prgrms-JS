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

const checkTodo = (index) => {
  console.log(index)
  this.data[index].isCompleted = !this.data[index].isCompleted
  console.log(this.data[index].isCompleted)
  todoList.setState(this.data)
}

const todoItem = document.querySelectorAll(".todoItem");

for (var i = 0; i < todoItem.length; i++){
  todoItem[i].addEventListener('click', e => {
    const index = e.target.parentNode.dataset.id;
    checkTodo(index)
  })
}



const deleteTodo = () => {

}

