function TodoList({
    todos,
    onToggle,
    onRemove
}) {
    this.todos = todos || []

    const todoUL = document.getElementById('todolistBOX')
    const todoULDONE = document.getElementById('todo-list-done')
    const todoULYET = document.getElementById('todo-list-yet')

    this.setState = (nextTodos) => {
        todos = nextTodos
        this.render()
    }

    this.render = () => {

        const todoDone = todos.filter(todo => todo.isCompleted)
        const todoYet = todos.filter(todo => !todo.isCompleted)

        todoULDONE.innerHTML = todoDone
            .map(todo =>
                `<li data-id="${todo._id}"
                     draggable="true">
                <strike>${todo.content}</strike>
                <button class="remove-button">✕</button></li>`
            ).join('')

        todoULYET.innerHTML = todoYet
            .map(todo =>
                `<li data-id="${todo._id}"
                     draggable="true">${todo.content}
                 <button class="remove-button">✕</button></li>`
            ).join('')
    }

    this.bindingEvent = () => {

        this.onClickEvent = () => {
            todoUL.addEventListener('click', function(e) {
                const id = e.target.closest('li').dataset.id

                if (e.target.className === 'remove-button') {
                    e.stopPropagation()
                    onRemove(id)
                } else {
                    onToggle(id)
                }
            })
        }

        this.dragEvent = () => {
            //drag start
            const dragStart = (e) => {
                const startTargetUL = e.target.closest('ul').id
                const targetID = e.target.dataset.id
                e.dataTransfer.setData('text', JSON.stringify({
                    targetID,
                    startTargetUL
                }))
            }

            const dragOver = (e) => {
                e.preventDefault()
                e.dataTransfer.dropEffect = 'move'
            }

            const dragDrop = (e) => {
                e.preventDefault()
                const endTargetUL = e.target.closest('ul').id
                const data = JSON.parse(e.dataTransfer.getData('text'))
                if (data.startTargetUL !== endTargetUL) {
                    //toggleApi호출
                    onToggle(data.targetID)
                }
                return
            }

            todoULDONE.addEventListener('dragstart', dragStart)
            todoULYET.addEventListener('dragstart', dragStart)
            todoULDONE.addEventListener('dragover', dragOver)
            todoULYET.addEventListener('dragover', dragOver)
            todoULDONE.addEventListener('drop', dragDrop)
            todoULYET.addEventListener('drop', dragDrop)
        }

        this.onClickEvent()
        this.dragEvent()
    }

    this.render()
    this.bindingEvent()
}

export default TodoList
