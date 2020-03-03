import { ERROR_MESSAGE, SELECTOR } from './constant.js'

export const noticeError = error => {
    alert(ERROR_MESSAGE.API_ERROR)
    console.error(error)
}

export const onLoading = () => {
    document.querySelector(SELECTOR.TODOTITLE).innerHTML = ''
    document.querySelector(SELECTOR.TODOLIST).innerHTML = '<div class="loader">Loading...</div>'
    document.querySelector(SELECTOR.ADDTODO_BUTTON).disabled = true
}

export const offLoading = () => {
    document.querySelector(SELECTOR.ADDTODO_BUTTON).disabled = false
}

export function swapElements(obj1, obj2) {
    const temp = document.createElement('div')
    obj1.parentNode.insertBefore(temp, obj1)

    obj2.parentNode.insertBefore(obj1, obj2)

    temp.parentNode.insertBefore(obj2, temp)

    temp.parentNode.removeChild(temp)
}
