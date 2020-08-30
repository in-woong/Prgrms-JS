class TodoList {
	$target = null;
	$todoList = null;
	data = null;

	constructor({ $target, initialData }) {
		this.$target = $target;
		this.data = initialData.data;
	}

	dom() {
		this.$todoList = document.createElement('ul');
		this.$target.appendChild(this.$todoList);

		return this;
	}

	setState(nextData) {
		this.data = nextData;
		this.render();

		return this;
	}

	render() {
		if (!this.data || !this.data.length) {
			this.$todoList.innerHTML = '';
			return this;
		}

		this.$todoList.innerHTML = this.data.map(t => `<li>
			${t.isCompleted ? `<s>${t.text}</s>` : t.text}
		</li>`).join('');

		return this;
	}
}
