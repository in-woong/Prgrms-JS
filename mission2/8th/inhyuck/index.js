const todoList = new TodoList({todoItems: data, selector: '#todo-list'});
setTimeout(() => todoList.setState({nextTodoItems: nextData}), 500);

const developerTodoList = new TodoList({todoItems: developerTodoItems, selector: '#developer-todo-list'});
const happyLifeTodoList = new TodoList({todoItems: happyLifeTodoItems, selector: '#happy-life-todo-list'});

function onSaveTodoItem({todoItemText}) {
    todoList.addTodoItem({todoItemText});
}
const todoInput = new TodoInput({selector: '#todo-input', onSaveTodoItem});
