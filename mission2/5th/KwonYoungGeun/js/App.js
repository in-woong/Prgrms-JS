class App {
  constructor(selector) {
    if (typeof select === 'string' && selector[0] !== '#') {
      throw new Error('id 선택자를 입력해주세요.')
    }

    this.$app = $(selector)
    this.todoList = new TodoList(todoData, $(`${selector}>.todo-list`))
    this.todoInput = new TodoInput($(`${selector}>.todo-input`))
  }
}
