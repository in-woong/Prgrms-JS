function TodoList($appElem, todos, validateTodos) {
    this.todos = todos;
    this.$appElem = $appElem;
    this.$todoListElem = document.createElement('ul');
    
    appElem.appendChild(this.$todoListElem);

    this.setState = (nextTodos) => {
        this.todos = nextTodos;
        this.render();
    };

    this.render = () => {
        validateTodos(this);

        const todoListItem = this.todos.map(item => (
            item.isCompleted ? `<li><s>${item.text}</s></li>` : `<li>${item.text}</li>`
        ));

        this.$todoListElem.innerHTML = todoListItem.join('');
    };

    this.render();
};

export default TodoList;
