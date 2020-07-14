function Todo(props) {
	this.$target = props.target;
	this.todo = props.todo;
	this.index = props.index;
	this.render = function() {
		const $button = document.createElement('button');
		$button.textContent = 'x';
		$button.setAttribute('index', this.index);
		const $li = document.createElement('li');
		$li.setAttribute('index', this.index);
		$li.textContent = this.todo.text;
		$li.appendChild($button);
		if (this.todo.isCompleted) {
			$li.classList.add('completed');
		}
		this.$target.appendChild($li);
	}
	this.render();
}
