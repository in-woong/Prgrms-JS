export default function TodoCount({ $target, initData }) {
    this.$target = $target;
    this.data = initData;

    this.render = function () {
        const todoItemTotalCount = this.data.todoItems.length;
        const todoItemCompletedCount = this.data.todoItems.filter(todoItem => todoItem.isCompleted).length;

        this.$target.innerHTML = `
            <span>total: ${todoItemTotalCount}</span>
            <span>, completed: ${todoItemCompletedCount}</span> 
        `;
    };

    this.setState = function (nextData) {
        this.data = nextData;
        this.render();
    };

    this.render();
}
