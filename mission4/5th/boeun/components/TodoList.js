import { swapElements } from '../shared/util.js'

function TodoList(params) {
    const $targetElement = document.querySelector(params.target)
    const onClickTodo = params.onClickTodo
    const onRemoveTodo = params.onRemoveTodo

    this.data = []

    this.init = () => {
        this.bindEvent()
    }

    this.onDragStart = e => {
        e.dataTransfer.setData('beginItem', e.target.dataset.id)

        setTimeout(() => (e.target.style.visibility = 'hidden'), 0)
        e.target.style.color = 'green'
    }

    this.onDragOver = e => {
        e.preventDefault()
    }

    this.onDragDrop = e => {
        e.preventDefault()

        let beginItemId = e.dataTransfer.getData('beginItem')
        let beginElement = document.querySelector(`[data-id="${beginItemId}"]`)

        if (e.target.tagName === 'STRIKE') {
            swapElements(beginElement, e.target.parentNode)
        } else {
            swapElements(beginElement, e.target)
        }

        beginElement.style.visibility = 'visible'
        beginElement.style.color = 'black'
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
        this.data = nextData
        this.render()
    }

    this.render = () => {
        const htmlString = this.data
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
