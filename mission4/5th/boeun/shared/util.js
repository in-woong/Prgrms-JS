import { ERROR_MESSAGE, SELECTOR } from './constant.js'

export const noticeError = error => {
    alert(ERROR_MESSAGE.API_ERROR)
    console.error(error)
}

export const showLoadState = () => {
    document.querySelector(SELECTOR.TODOTITLE).innerHTML = ''
    document.querySelector(SELECTOR.TODOLIST).innerHTML = '<div class="loader">Loading...</div>'
}
