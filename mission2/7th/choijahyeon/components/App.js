function App(todos) {
	try {
		this.todos = todos;
		this.$target = document.querySelector('#app');
		this.addTodo = (text) => {
			this.todos.push({
				text: text,
				isCompleted: false
			});
			this.todoList.setState(this.todos);
			this.changeCount();
		};
		this.deleteTodo = (index) => {
			this.todos.splice(index, 1);
			this.todoList.setState(this.todos);
			this.changeCount();
		};
		this.toggleTodo = (index) => {
			this.todos[index].isCompleted = !this.todos[index].isCompleted;
			this.todoList.render();
			this.changeCount();
		};
		this.changeCount = () => {
			this.todoCount.setState({
				totalCount : this.todos.length,
				completeCount : this.todos.filter(todo => todo.isCompleted).length
			});
		};
		this.todoInput = new TodoInput({
			target : this.$target, 
			addTodo : this.addTodo
		});
		this.todoList = new TodoList({
			target : this.$target, 
			deleteTodo : this.deleteTodo, 
			toggleTodo : this.toggleTodo,
			todos: this.todos
		});
		this.todoCount = new TodoCount({
			target : this.$target, 
			totalCount : this.todos.length, 
			completeCount : this.todos.filter(todo => todo.isCompleted).length
		});
	} catch(e) {
		document.body.innerHTML = `<div>${e}</div>`;
	}
}