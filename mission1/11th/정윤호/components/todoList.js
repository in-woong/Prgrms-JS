'use strict';

import todoItemTemplate from '../layouts/todoItemTemplate.js'
import checkTodoItemData from '../validators/checkTodoItemData.js'

export default class TodoList {
	constructor(data, element) {
		this.todoData = data;
		this.$todoList = element;
		checkTodoItemData(this.todoData);
	}

	render() {
		this.$todoList.innerHTML = '';
		this.todoData.map(todoItem => {
			this.$todoList.innerHTML += todoItemTemplate(todoItem);
		});
	}

	setState(data) {
		this.todoData = data;
		checkTodoItemData(this.todoData);
		this.render();
	}
}
