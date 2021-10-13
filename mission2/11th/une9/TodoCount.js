class TodoCount {
    constructor(data, element) {
        this.data = data;
        this.element = element;

        this.todoCountElement = document.createElement('div');
        this.todoCountElement.setAttribute('class', 'todo-count');
        this.element.appendChild(this.todoCountElement);

        this.setState(this.data);
    }

    setState(data) {
        const nowDone = data.filter(list => list.isCompleted).length;
        const listLength = data.length;
        const todoCountHTMLString = `${nowDone}/${listLength}`;
        this.todoCountElement.innerHTML = todoCountHTMLString;
    }
}
