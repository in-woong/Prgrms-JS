export default function TodoInput({ $target, todoInputBox, btnRemoveAll, onAddTodo, onRemoveAll }) {
  this.$target = $target
  this.$todoInputBox = this.$target.querySelector(todoInputBox)
  this.$btnRemoveAll = this.$target.querySelector(btnRemoveAll)
  this.onAddTodo = onAddTodo
  this.onRemoveAll = onRemoveAll

  this.render = () => {
    this.todoInput = document.createElement('input')
    this.todoInput.className = 'input-todo'
    this.todoInput.type = 'text'
    this.$todoInputBox.appendChild(this.todoInput)

    this.btnTodoAdd = document.createElement('button')
    this.btnTodoAdd.className = 'btn-todo-add'
    this.btnTodoAdd.innerHTML = '추가'
    this.$todoInputBox.appendChild(this.btnTodoAdd)
  }

  this.eventRemoveAll = () => {
    this.$btnRemoveAll.addEventListener('click', () => {
      this.onRemoveAll();
    })
  }
  
  this.eventAddTodo = () => {
    this.btnTodoAdd.addEventListener('click', () => {
        this.onAddTodo(this.todoInput.value)
        this.todoInput.value =''
        this.todoInput.focus()
    })
  }

  this.render()
  this.eventAddTodo()
  this.eventRemoveAll()
}
 