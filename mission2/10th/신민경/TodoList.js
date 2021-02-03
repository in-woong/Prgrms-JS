function TodoList($target, data) {
  this.$target = $target
  this.data = data

  this.render = function() {
    this.$target.innerHTML = this.data
      .map(todo => `<div>${todo.text}<button id='deleteButton' data-id=${this.data.indexOf(todo)} onclick=deleteList()>DELETE</button></div>`)
      .join('')
  }

  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}

const newTodoList = []
const AddTodo = function(){
  const newTodo = {
    text: document.querySelector('#inputTodo').value,
    isCompleted: false,
  }
  newTodoList.push(newTodo)

  return newTodoList
}

const deleteList = function() {
  const buttonId = document.querySelector('#deleteButton')
  document.querySelector('#todo-list').innerHTML += buttonId.dataset.id
  newTodoList.splice(buttonId.dataset.id, 1)
  $tgt = document.querySelector('#todo-list')
  TodoList($tgt, newTodoList)
}
