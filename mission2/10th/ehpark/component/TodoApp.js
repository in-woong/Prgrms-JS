import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'

export default function TodoApp($target, title) {
	this.$target = $target
  this.title = title
  this.todos = []

	this.handlerAddTodo = (inputData) => {
		if(inputData){
			this.todos.push({
				id: Date.now(),
				text: inputData,
				isCompleted: false
			})
		}
		this.todoList.render()
		this.todoCount.render()
  }

	this.handlerToggleCompleted = (liItemId) => {
		const newData = this.todos.map(item => {
			const newObj = { ...item }
			if(newObj.id === liItemId) {
				newObj.isCompleted = !newObj.isCompleted
			}
			return newObj
		})
		this.setState(newData)
	}
  
	this.render = () => {
    const todoInputBoxSelector = 'box-todo-input'
    const todoListSelector = 'list-todo'
    const todoCountSelector = 'box-todo-count'
		this.$target.innerHTML = `<strong class="subject-todo">${this.title}</strong>
															<div class=${todoInputBoxSelector}></div>
                              <ul class=${todoListSelector}></ul>
                              <div class=${todoCountSelector}></div>`

		this.todoInput = new TodoInput($target, `.${todoInputBoxSelector}`, this.handlerAddTodo)
    this.todoList = new TodoList($target, this.todos, `.${todoListSelector}`,  this.handlerToggleCompleted)
		this.todoCount = new TodoCount($target, this.todos, `.${todoCountSelector}`)
  }

	this.setState = (nextState) => {
		this.todos = nextState
		this.todoList.setState(nextState)
		this.todoCount.setState(nextState)
	}

	this.render()
}