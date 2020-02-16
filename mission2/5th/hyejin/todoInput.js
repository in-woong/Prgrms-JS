function TodoInput(todoList, targetElement) {
    this.todoList = todoList;
    this.targetElement = targetElement;

    this.targetElement.addEventListener('keyup', event => {
        if (event.keyCode !== 13) return false;
        const nextData = this.todoList.data;
        nextData.push({
            text: event.target.value,
            isCompleted: false
        })
        this.todoList.setState(nextData);
        this.targetElement.value = '';
    })

}