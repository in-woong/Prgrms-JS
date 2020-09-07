function TodoCount({$targetElement}) {
    this.$todoCount = $targetElement;
    this.todoItemTotalCount = 0;
    this.todoItemCompletedCount = 0;

    this.render = function () {
        this.$todoCount.innerHTML = `
            <span>total: ${this.todoItemTotalCount}</span>
            <span>, completed: ${this.todoItemCompletedCount}</span> 
        `;
    };

    this.setState = function ({todoItemTotalCount, todoItemCompletedCount}) {
        this.todoItemTotalCount = todoItemTotalCount;
        this.todoItemCompletedCount = todoItemCompletedCount;
        this.render();
    };

    this.render();
}
