function TodoCount({$targetElement, todoItems}) {
    this.$targetElement = $targetElement;
    this.todoItems = todoItems;

    this.render = function () {
        const todoItemTotalCount = this.todoItems.length;
        const todoItemCompletedCount = this.todoItems.filter(todoItem => todoItem.isCompleted).length;

        this.$targetElement.innerHTML = `
            <span>total: ${todoItemTotalCount}</span>
            <span>, completed: ${todoItemCompletedCount}</span> 
        `;
    };

    this.setState = function ({todoItems}) {
        this.todoItems = todoItems;
        this.render();
    };

    this.render();
}
