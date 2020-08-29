class ValidDataCheckError {
  constructor(todoData) {
    try {
      this.isValidTodoData(todoData);
    } catch(e) {
      console.log(e);
    }
      
  }

  isValidTodoData(todoData) {
    if (todoData === null || todoData === undefined) {
      throw new Error('입력 값이 비었습니다.');
    } else if (!Array.isArray(todoData)) {
      throw new Error('배열이 아닙니다.');
    }

    todoData.forEach((todo) => {
      if (typeof todo.text !== 'string' || typeof todo.isCompleted !== 'boolean') {
        throw new Error('todo 내용이 이상합니다.')
      }
    })
  }
}

export class TodoList extends ValidDataCheckError {
  constructor(todoEliment, todoList) {
    super(todoList)

    this.todoEliment = todoEliment
    this.todoList = todoList

    this.render()
  }

  render() {
    this.todoEliment.innerHTML = this.createView()
  }

  createView() {
    return `<ul>${this.todoList.map((element) => `<li>${element.text}</li>`).join('')}</ul>`
  }
}
