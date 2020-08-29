class TodoList {
	$target = null;
	$todoList = null;
	todos = null;

	constructor({ $target, initialData }) {
		this.$target = $target;
		this.todos = initialData.todos || [];
	}

	dom() {
		this.$todoList = document.createElement('ul');
		this.$target.appendChild(this.$todoList);

		return this;
	}


	render() {
		this.$todoList.innerHTML = this.todos.map(t => `<li>${t.text}</li>`).join(''); 
		return this;
	}
}