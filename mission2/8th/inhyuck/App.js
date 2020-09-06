function App({selector}) {
    this.$app = document.querySelector(selector);
    this.todoList = null;
    this.todoInput = null;

    this.render = function () {
        this.$app.innerHTML = `
            <div id="todo-list"></div>
            <div id="todo-input"></div>
        `;

        this.mounted();
    };

    this.mounted = function () {
        this.todoList = new TodoList({$targetElement: this.$app.querySelector('#todo-list'), todoItems: []});
        this.todoInput = new TodoInput({$targetElement: this.$app.querySelector('#todo-input'), onSaveTodoItem});
    };

    const onSaveTodoItem = ({todoItemText}) => {
        this.todoList.addTodoItem({todoItemText});
    };

    this.render();
}
