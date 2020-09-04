const todoList = new TodoList({todoItems: data, selector: '#todo-list'});
setTimeout(() => todoList.setState({nextTodoItems: nextData}), 500);

const developerTodoList = new TodoList({todoItems: developerTodoItems, selector: '#developer-todo-list'});
setTimeout(() => developerTodoList.setState({nextTodoItems: nextDeveloperTodoItems}), 500);

const happyLifeTodoList = new TodoList({todoItems: happyLifeTodoItems, selector: '#happy-life-todo-list'});
setTimeout(() => happyLifeTodoList.setState({nextTodoItems: nextHappyLifeTodoItems}), 500)
