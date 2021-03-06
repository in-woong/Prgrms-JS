const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const homeTodoData = [
  {
    text: '청소하기',
    isCompleted: true,
  },
  {
    text: '산책하기',
    isCompleted: false,
  },
]

const workTodoData = [
  {
    text: '이메일 정리하기',
    isCompleted: true,
  },
  {
    text: '세미나자료 작성하기',
    isCompleted: false,
  },
]

const nextData = [
  {
    text: '책상 정리하기',
    isCompleted: false,
  },
  {
    text: '저녁 약속 참석하기',
    isCompleted: false,
  },
]

const validateData = function (value) {
  if (isNull(value) || isUndefined(value)) {
    return false
  }
  if (!(isArray(value) && value.length > 0)) {
    return false
  }

  return value.every((element) => {
    return (
      isObject(element) &&
      'text' in element &&
      isString(element.text) &&
      'isCompleted' in element &&
      isBoolean(element.isCompleted)
    )
  })
}

function TodoList(data, elemID) {
  if (!(this instanceof arguments.callee)) {
    throw new Error('Function must be called with new')
  }

  if (!validateData(data)) {
    throw new Error('Invalid data')
  }

  this.todos = data
  this.elemID = elemID

  const getTodosText = () => {
    return this.todos
      .map((todo) =>
        todo.isCompleted
          ? `<li><s>${todo.text}</s></li>`
          : `<li>${todo.text}</li>`
      )
      .join('')
  }

  this.render = function () {
    const $todosView = document.querySelector(`#${this.elemID}`)
    $todosView.innerHTML = getTodosText()
  }
  this.setState = function (nextData) {
    if (!validateData(nextData)) {
      throw new Error('Invalid data')
    }
    this.todos = nextData

    const $todosView = document.querySelector(`#${this.elemID}`)
    $todosView.innerHTML = ''
    this.render()
  }
  this.render()
}

try {
  const todoList = new TodoList(data, 'todo-list')
  todoList.setState(nextData)

  const homeTodoList = new TodoList(homeTodoData, 'home-todo-list')
  const workTodoList = new TodoList(workTodoData, 'work-todo-list')
} catch (err) {
  console.log(err)
}
