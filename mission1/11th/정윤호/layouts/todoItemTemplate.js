export const todoItemTemplate = ({text, isCompleted}) => {
	return isCompleted ? `<s><p>${text}</p></s>` : `<p>${text}</p>`;
};

export default todoItemTemplate;
