import { ERROR_MESSAGE, SELECTOR } from './constant.js'

export const noticeError = error => {
    alert(ERROR_MESSAGE.API_ERROR)
    console.error(error)
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
