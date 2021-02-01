export default function TodoInput($target, todoInputBoxSelector, handlerAddTodo) {
	this.$target = $target
	this.$todoInputBox = this.$target.querySelector(todoInputBoxSelector)
	this.handlerAddTodo = handlerAddTodo

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
	
	this.eventAddTodo = () => {
		this.btnTodoAdd.addEventListener('click', () => {
				this.handlerAddTodo(this.todoInput.value)
				this.todoInput.value =''
				this.todoInput.focus()
		})
	}

	this.render()
	this.eventAddTodo()
}