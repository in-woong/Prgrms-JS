function errorCheck(context, todos) {
  if (context === window) {
    throw new Error('new 키워드로 생성해주세요')
  }
  if (!Array.isArray(todos) || !todos) {
    throw new Error('데이터 타입을 다시 확인해주세요')
  }
  for (const todo of todos) {
    if (!todo.text || typeof todo.text !== 'string')
      throw new Error(`객체의 내용을 다시 확인해주세요 -> todo:${todo.text}`)
  }
}

export default function TodoList(todos, toggleTodo, removeTodo) {
  errorCheck(this, todos)
  this.$todoList = document.getElementById('todo-list')
  this.todos = todos
  this.toggleTodo = toggleTodo
  this.removeTodo = removeTodo

  this.setState = function(nextData) {
    errorCheck(this, todos)
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
}
