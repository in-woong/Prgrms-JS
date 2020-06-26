const data = [
	{
		text: 'JS 복습하기',
		isCompleted: true
	},
	{
		text: 'JS 복습하기2',
		isCompleted: true
	}
];

const data2 = [
	{
		text: 'TS 공부하기',
		isCompleted: true
	},
	{
		text: 'TS 복습하기',
		isCompleted: false
	}
];

const dataChange = [
	{
		text: 'TS 공부하기',
		isCompleted: true
	},
	{
		text: 'TS 복습하기',
		isCompleted: true
	},
	{
		text: '출근 준비하기',
		isCompleted: false
	}
];

interface DataProps {
	text: string;
	isCompleted: boolean;
}

type TodoListProps = {
	// TodoList 매개변수 타입을 한번에 지정해주는 법?
	data: DataProps[];
	id: string;
};

const createTodoHTMLString = (data: DataProps) => {
	return data.isCompleted ? `<div><s>${data.text}</s></div>` : `<div>${data.text}</div>`;
};

function TodoList(data: DataProps[], id: string) {
	this.data = data;

	this.validate = (data: DataProps[]) => {
		if (data === null || data === undefined) throw new Error('null이나 undefined면 안 됩니다.');
		if (!Array.isArray(this.data)) throw new Error('배열이 아닌 값이 오면 안 됩니다.');
		if (!(this instanceof TodoList)) throw new Error('new를 사용하세요.');
	};

	this.render = () => {
		this.validate(data);
		const html = data.map((value) => createTodoHTMLString(value)).join('');
		return (document.querySelector(`#${id}`)!.innerHTML = html);
	};

	this.setState = (nextData: DataProps[]) => {
		data = nextData;
		this.render();
	};
}

try {
	const todoList = new TodoList(data, 'todo-list-1');
	const todoList2 = new TodoList(data2, 'todo-list-2');
	todoList.render();
	todoList2.render();
	todoList2.setState(dataChange);
} catch (error) {
	console.error(error);
}
