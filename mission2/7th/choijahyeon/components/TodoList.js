function validation(todos) {
	if(!Array.isArray(todos)) {
		throw new Error('[error] parameter is not array.');
	}
	todos.forEach((todo) => {
		if( !todo.text || typeof todo.text !== 'string' || typeof todo.isCompleted !== 'boolean') {
			throw new Error(`[error] todo data type Error.`);
		}
	});
}

function TodoList(props) {
	if(!new.target) {
		throw new Error('[error] TodoList() must be called with new.');
	}
	
	validation(props.todos);

	this.$target = props.target;
	this.deleteTodo = props.deleteTodo;
	this.toggleTodo = props.toggleTodo;
	this.todos = props.todos;
	this.$ul = document.createElement('ul');
	
	this.render = function() {
		this.$ul.innerHTML = '';
		this.todos.map((todo, index) => {
			new Todo({
				target : this.$ul, 
				todo : todo, 
				index : index, 
				deleteTodo : this.deleteTodo,
				toggleTodo : this.toggleTodo
			});
		});
	};
	this.setState = function(nextData) {
		this.todos = nextData;
		this.render();
	};
	this.render();
	this.$target.appendChild(this.$ul);
}