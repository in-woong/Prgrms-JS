function TodoInput($target, onHandleAddTodo) {
  this.$target = $target
  this.$inputWrapper = document.createElement('div')

  this.$target.appendChild(this.$inputWrapper)

  this.render = () => {
    this.$inputWrapper.innerHTML = `<input class="todo-input" type="text" /><button class="todo-btn">Enter</button>`

    const todoInput = document.querySelector('.todo-input')
    const todoBtn = document.querySelector('.todo-btn')

    todoInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13 && e.target.value) {
        onHandleAddTodo(e.target.value)
        e.target.value = ''
      }
    })

    todoBtn.addEventListener('click', () => {
      if (todoInput.value) {
        onHandleAddTodo(todoInput.value)
        todoInput.value = ''
      }
    })
  }
}

export default TodoInput
