function TodoInput(todoList, onEnter, targetElement) {
    this.todoList = todoList
    this.onEnter = onEnter
    this.targetElement = targetElement

    this.targetElement.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            this.onEnter(event.target.value)
            this.targetElement.value = ''
        }
    })

}
