export default function TodoInput(todoInput, addTodo, removeAll) {
  this.$todoInput = todoInput

  this.render = function () {
    const template = `
    <input class="todo-input" type="text"></input>
    <button type="button" class="todo-button">할일 추가하기</button>
    <button type="button" class="todo-remove-all">전부 삭제</button>
      `
    this.$todoInput.innerHTML = template
  }

  this.$todoInput.addEventListener('click', function (e) {
    const todo = this.querySelector('.todo-input')
    if (e.target.classList.contains('todo-button')) {
      if (!todo.value) throw new Error('할일을 입력해주세요')
      if (todo.value) addTodo({ text: todo.value, isCompleted: false })
      todo.value = ''
    }
    if (e.target.classList.contains('todo-remove-all')) {
      removeAll()
    }
  })
  this.render()
}
