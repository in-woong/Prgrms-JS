function App({selector}) {
    this.$app = document.querySelector(selector);
    this.$app.innerHTML = `
            <div id="todo-list"></div>
            <div id="todo-count"></div>
            <div id="todo-input"></div>
        `;

    this.todoList = new TodoList({$targetElement: this.$app.querySelector('#todo-list'), todoItems: [], onChangeTodoItems});
    this.todoInput = new TodoInput({$targetElement: this.$app.querySelector('#todo-input'), onSaveTodoItem});
    this.todoCount = new TodoCount({$targetElement: this.$app.querySelector('#todo-count')});

    const onSaveTodoItem = ({todoItemText}) => {
        this.todoList.addTodoItem({todoItemText});
    };

    const onChangeTodoItems = ({todoItems}) => {
        const todoItemTotalCount = todoItems.length;
        const todoItemCompletedCount = todoItems.filter(todoItem => todoItem.isCompleted).length;
        this.todoCount.setState({todoItemTotalCount, todoItemCompletedCount});
    };
}
