import { ERROR_MESSAGE, ERROR_ALERT_MESSAGE } from './constant.js'

export const validateApiResponse = response => {
    if (response.status < 200 || response.status >= 300) {
        throw new Error(ERROR_MESSAGE.API_ERROR)
    }
}

export const validateElement = $element => {
    if (!($element instanceof HTMLElement)) {
        throw new Error(ERROR_MESSAGE.ELEMENT_ERROR)
    }
}

export const validateUserId = userId => {
    if (!userId || userId === '') {
        alert(ERROR_ALERT_MESSAGE.USER_ID_ERROR)
        throw new Error(ERROR_MESSAGE.USER_ID_ERROR)
    }
}
