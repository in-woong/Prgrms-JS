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

function TodoList(todos, id) {
  errorCheck(this, todos)
  this.todos = todos
  this.id = id

  this.setState = function(nextData) {
    errorCheck(this, todos)
    this.todos = nextData
    this.render()
  }

  const $addButton = document.getElementById('addBtn')

  $addButton.addEventListener('click', () => {
    const $input = document.getElementById('newTodo')
    const newTodo = { text: $input.value, isCompleted: false }
    this.setState([...this.todos, newTodo])
    $input.value = ''
    $input.focus()
  })

  onRemove = removeNode => {
    const $removeList = removeNode.previousSibling
    this.todos.splice($removeList.id, 1)
    this.setState(this.todos)
  }

  onToggle = clickedIndex => {
    this.todos[clickedIndex] = {
      ...this.todos[clickedIndex],
      isCompleted: !this.todos[clickedIndex].isCompleted,
    }
    this.setState(this.todos)
  }

  this.render = function() {
    const $todoList = document.getElementById(this.id)
    $todoList.innerHTML = `<ul>${this.todos
      .map((todo, index) =>
        todo.isCompleted
          ? ` <li id=${index} onclick="onToggle(${index})" >${todo.text} </li><button class="todo-btn" onclick="onRemove(this)">삭제</button><hr/>`
          : `<li id=${index} onclick="onToggle(${index})"><strike>${todo.text}</strike></li><button class="todo-btn" onclick="onRemove(this)">삭제</button><hr/>`
      )
      .join('')}<ul>`
  }
}
