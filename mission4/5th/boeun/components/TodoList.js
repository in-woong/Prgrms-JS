function TodoList(params) {
    const $targetElement = document.querySelector(params.target)
    const onClickTodo = params.onClickTodo
    const onRemoveTodo = params.onRemoveTodo

    this.data = []

    this.init = () => {
        this.bindEvent()
    }

    this.bindEvent = async () => {
        $targetElement.addEventListener('click', function(e) {
            const id = e.target.closest('li').dataset.id

            if (e.target.className === 'remove-button') {
                e.stopPropagation()
                onRemoveTodo(id)
            } else {
                onClickTodo(id)
            }
        })
    }

    this.setState = nextData => {
        this.data = nextData
        this.render()
    }

    this.render = () => {
        const htmlString = this.data
            .map(todo => {
                const contentHTML = todo.isCompleted ? `<strike>${todo.content}</strike>` : `${todo.content}`

                return `<li draggable="true" class="task" data-id="${todo._id}">${contentHTML} <button class="remove-button">Remove</button></li>`
            })
            .join('')

        $targetElement.innerHTML = `<ul class="tasklist">${htmlString}</ul>`
    }

    this.init()
}

export default TodoList
