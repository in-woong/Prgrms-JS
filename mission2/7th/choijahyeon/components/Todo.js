function Todo(props) {
	this.$target = props.target;
	this.todo = props.todo;
	this.index = props.index;
	this.toggleTodo = props.toggleTodo;
	this.deleteTodo = props.deleteTodo;
	this.render = function() {
		const $button = document.createElement('button');
		$button.textContent = 'x';
		$button.addEventListener('click', (e) => {
			e.stopPropagation();
			this.deleteTodo(this.index);
		});

		const $li = document.createElement('li');
		$li.textContent = this.todo.text;
		$li.appendChild($button);
		if (this.todo.isCompleted) {
			$li.classList.add('completed');
		}
		$li.addEventListener('click', (e) => {
			this.toggleTodo(this.index);
		});
		this.$target.appendChild($li);
	}
	this.render();
}
