export class TodoCount {
    constructor(todoList) {
        this.$list = todoList;
        this.$target = document.createElement('div');
        this.$target.classList.add('todo-count');
    }

    render() {
        this.$target.innerHTML = `완료 : ${this.$list.data.reduce((acc, { isCompleted }) => acc + isCompleted, 0)} / 전체 : ${this.$list.data.length}`;
        this.$list.$target.appendChild(this.$target);
    }
}
