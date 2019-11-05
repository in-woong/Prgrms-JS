import { ERROR_KEY, ERROR_MESSAGE, throwError } from './error.js'

const LANG = document.documentElement.lang || 'en'

function resetInput(el) {
  el.value = ''
  el.focus()
}

const validator = {
  isNotUseNew: nowThis => !nowThis || nowThis === window,
  isNotAvailableElement: ({ query, el }) => !(document.querySelector(query) || el),
  isNullOrUndefinedData: data => !data,
  isNotArray: data => !Array.isArray(data),
  isNotAvailableInnerData: data => data.filter(({ text }) => !text).length > 0,
  isEmptyList: data => data.length === 0
}

function validTodoData(data) {
  if (validator.isNotArray(data)) {
    throwError(ERROR_KEY.ERROR003, ERROR_MESSAGE.IS_NOT_ARRAY)
  } else if (validator.isNotAvailableInnerData(data)) {
    throwError(ERROR_KEY.ERROR004, ERROR_MESSAGE.IS_NOT_AVAILABLE_DATA)
  }
  return true
}

const storage = {
  get: key => window.localStorage.getItem(key),
  set: (key, data) => window.localStorage.setItem(key, data),
}

export { validator, resetInput, validTodoData, LANG, storage }
