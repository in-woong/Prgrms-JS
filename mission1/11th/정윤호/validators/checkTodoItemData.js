export const checkTodoItemData = (data) => {
	if (data === null) {
		throw new Error('todo item data is null');
	}

	if (data === undefined) {
		throw new Error('todo item data is undefined');
	}

	if (!Array.isArray(data)) {
		throw new Error('todo item data is not Array');
	}

	data.forEach(todoItem => {
		if (typeof todoItem !== 'object') {
			throw new Error('todo item is not object');
		}

		if (!todoItem.hasOwnProperty('text')) {
			throw new Error('todo item has not "text" property');
		}

		if (!todoItem.hasOwnProperty('isCompleted')) {
			throw new Error('todo item has not "isCompleted" property');
		}
	});
}

export default checkTodoItemData;
