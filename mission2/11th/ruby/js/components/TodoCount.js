function TodoCount($appElem, todos) {
    this.todos = todos;
    this.$todoCountElem = document.createElement('div');

    this.$todoCountElem.className = 'todos_count';
    $appElem.appendChild(this.$todoCountElem);

    this.setState = (nextTodos) => {
        this.todos = nextTodos;
        this.render();
    };
    
    this.render = () => {
        this.$todoCountElem.innerHTML = `Count : ${todos.length}개`;
    };

    this.render();
};

export default TodoCount;
