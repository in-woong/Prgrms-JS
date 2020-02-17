function DeleteTodo(todoList) {
    this.todoList = todoList

    const deleteButtonList = document.getElementById('todo-list')
    deleteButtonList.addEventListener('click', e => {
        if (e.target.innerText === 'del') {
            const nextData = this.todoList.data.filter(item => item.id != e.target.value)
            this.todoList.setState(nextData)
        }
    })
}

function ToggleTodoComplete(todoList, onToggle) {
    this.todoList = todoList
    this.onToggle = onToggle
    const todoTexts = document.querySelectorAll('.todos')
    todoTexts.forEach(todoText => {
                todoText.addEventListener('click', e => {
                    const nextData = this.onToggle(this.todoList.data, e.target.value)
                    this.todoList.setState(nextData)
                })
             })
}
