import { swapItems, controlStrike } from '../shared/util.js'

function TodoList(params) {
    const $targetElement = document.querySelector(params.target)
    const onClickTodo = params.onClickTodo
    const onRemoveTodo = params.onRemoveTodo

    this.todoListData = []

    this.init = () => {
        this.bindEvent()
    }

    this.onDragStart = e => {
        const eventTarget = controlStrike(e.target)
        e.dataTransfer.setData('draggingItemId', eventTarget.dataset.id)

        setTimeout(() => (eventTarget.style.visibility = 'hidden'), 0)
        eventTarget.style.color = 'green'
    }

    this.onDragOver = e => {
        e.preventDefault()
    }

    this.onDragDrop = e => {
        e.preventDefault()

        const eventTarget = controlStrike(e.target)
        const draggingIndex = this.todoListData.findIndex(item => item._id === e.dataTransfer.getData('draggingItemId'))
        const targetIndex = this.todoListData.findIndex(item => item._id === eventTarget.dataset.id)

        swapItems(this.todoListData, draggingIndex, targetIndex)

        this.setState(this.todoListData)

        eventTarget.style.visibility = 'visible'
        eventTarget.style.color = 'black'
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

        $targetElement.addEventListener('dragstart', this.onDragStart)
        $targetElement.addEventListener('drop', this.onDragDrop)
        $targetElement.addEventListener('dragover', this.onDragOver)
    }

    this.setState = nextData => {
        this.todoListData = nextData
        this.render()
    }

    this.render = () => {
        const htmlString = this.todoListData
            .map(todo => {
                const contentHTML = todo.isCompleted ? `<strike>${todo.content}</strike>` : `${todo.content}`

                return `<li draggable="true" data-id="${todo._id}">${contentHTML} <button class="remove-button">Remove</button></li>`
            })
            .join('')

        $targetElement.innerHTML = `<ul>${htmlString}</ul>`
    }

    this.init()
}

export default TodoList
