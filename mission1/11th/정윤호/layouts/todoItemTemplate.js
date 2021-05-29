'use strict';

export const todoItemTemplate = (todoData) => {
	const {text, isCompleted} = todoData;
	const template = {
		'completed': `<s><p>${text}</p></s>`,
		'unCompleted': `<p>${text}</p>`,
	}

	return template[isCompleted ? 'completed' : 'unCompleted'];
};

export default todoItemTemplate;
