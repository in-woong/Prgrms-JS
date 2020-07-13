function TodoInput(props) {
	this.$target = props.target;
	this.addTodo = props.addTodo;
	this.$input = document.createElement('input');
	this.render = function() {
		this.$input.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				this.addTodo(this.$input.value);
				this.$input.value = '';
			}
		})
		this.$target.appendChild(this.$input);
	};
	this.render();
}