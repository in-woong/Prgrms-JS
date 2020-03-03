import {
    SELECTOR,
    ERROR_ALERT_MESSAGE,
    THROTTLE_TIME
} from '../shared/constant.js'

function TodoInput(params) {
    const $targetElement = document.querySelector(params.target)
    const onAddTodo = params.onAddTodo

    const onClickAdd = () => {
        const todoText = document.querySelector(SELECTOR.TODOINPUT).value

        if (!todoText || todoText.length === 0) {
            return alert(ERROR_ALERT_MESSAGE.INPUT_EMPTY_ERROR)
        } else {
            onAddTodo(todoText)
            $targetElement.value = ''
        }
    }

    this.render = () => {
        this.bindEvent()
    }

    this.bindEvent = async () => {
        document.querySelector(SELECTOR.ADDTODO_BUTTON).addEventListener('click', onClickAdd)
    }

    this.render()
}

export default TodoInput