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

export const swapItems = (array, idx1, idx2) => {
    ;[array[idx1], array[idx2]] = [array[idx2], array[idx1]]
}

export const controlStrike = target => {
    if (target.tagName === 'STRIKE') {
        return target.parentNode
    } else {
        return target
    }
}
