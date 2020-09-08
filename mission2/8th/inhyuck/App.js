function App({selector}) {
    this.$app = document.querySelector(selector);
    this.$app.innerHTML = `
            <div id="todo-list"></div>
            <div id="todo-count"></div>
            <div id="todo-input"></div>
        `;

    this.todoItems = [{
        text: 'default todoItem!',
        isCompleted: false,
    }];

    const onSaveTodoItem = ({todoItemText}) => {
        this.todoItems.push({
            text: todoItemText,
            isCompleted: false,
        });

        this.todoList.setState({newTodoItems: this.todoItems});
        this.todoCount.setState({todoItems: this.todoItems});
    };

    const onRemoveTodoItem = ({todoItemIndex}) => {
        this.todoItems.splice(todoItemIndex, 1);

        this.todoList.setState({newTodoItems: this.todoItems});
        this.todoCount.setState({todoItems: this.todoItems});
    };

    const onCompleteTodoItem = ({todoItemIndex}) => {
        this.todoItems[todoItemIndex].isCompleted = !this.todoItems[todoItemIndex].isCompleted;

        this.todoList.setState({newTodoItems: this.todoItems});
        this.todoCount.setState({todoItems: this.todoItems});
    };

    this.todoList = new TodoList({
        $targetElement: this.$app.querySelector('#todo-list'),
        todoItems: this.todoItems,
        onRemoveTodoItem,
        onCompleteTodoItem,
    });
    this.todoInput = new TodoInput({$targetElement: this.$app.querySelector('#todo-input'), onSaveTodoItem});
    this.todoCount = new TodoCount({$targetElement: this.$app.querySelector('#todo-count'), todoItems: this.todoItems});
}
