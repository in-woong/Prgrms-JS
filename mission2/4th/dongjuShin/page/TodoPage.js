function TodoPage({ data }) {
    this.data = data;
    this.render = () => {
        const $container = document.getElementById('todo-container');
        $container.innerHTML = '';
        this.listDatas.forEach((listData, index) => {
            const listContainer = new TodoListContainer(listData, index, $container);
            validator.validateInstance(listContainer, TodoListContainer);
        });
    }
    this.render();
}