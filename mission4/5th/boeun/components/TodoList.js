import { fetchTodoList } from '../api/todosAPI.js'

function TodoList(params) {
    const $targetElement = document.querySelector(params.target)
    const onClick = params.onClick
    const onRemove = params.onRemove

    this.data = []

    $targetElement.addEventListener('click', function(e) {
        const id = e.target.closest('li').dataset.id

        if (e.target.className === 'remove-button') {
            e.stopPropagation()
            onRemove(id)
        } else {
            onClick(id)
        }
    })

    this.setState = nextData => {
        this.data = nextData
        this.render()
    }

    this.render = () => {
        const htmlString = this.data
            .map(todo => {
                const contentHTML = todo.isCompleted ? `<strike>${todo.content}</strike>` : `${todo.content}`

                return `<li data-id="${todo._id}">${contentHTML} <button class="remove-button">Remove</button></li>`
            })
            .join('')

        $targetElement.innerHTML = `<ul>${htmlString}</ul>`
    }
}

export default TodoList
