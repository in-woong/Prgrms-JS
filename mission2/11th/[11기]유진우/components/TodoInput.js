function TodoInput($target, onHandleAddTodo) {
  this.$target = $target
  this.$inputWrapper = document.createElement('div')

  this.$target.appendChild(this.$inputWrapper)
  // 1. 생성과 동시에 input, button 태그를 만들고, 이벤트를 추가한다.
  // 2. render 함수 내에서 div 태그 안에 innerTHML로 input, button을 넣고, render 함수 안에서 다시 Event를 추가한다.

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
