export default function TodoInput(params) {
  this.target = params.app
  this.onAddTodo = params.onAddTodo
  this.onRemoveAllTodo = params.onRemoveAllTodo
  this.todoInput = document.createElement('div')
  this.target.appendChild(this.todoInput)

  this.render = () => {
    this.todoInput.innerHTML = `<form class="todo-add">
    <input class="todo-input" type="text"></input>
    <button type="submit" >추가하기</button>
    </form>
    <button type="button" class="todo-all-remove">
    전부 삭제하기
    </button>`
  }

  this.todoInput.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoText = e.target.querySelector('.todo-input').value

    if (!todoText) {
      alert('값을 입력해주세요')
      return
    }

    if (e.target.classList.contains('todo-add')) {
      this.onAddTodo(todoText)
      e.target.querySelector('.todo-input').value = ''
    }
  })

  this.todoInput.addEventListener('click', (e) => {
    if (e.target.classList.contains('todo-all-remove')) {
      this.onRemoveAllTodo()
    }
  })

  this.render()
}
