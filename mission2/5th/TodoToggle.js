
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
