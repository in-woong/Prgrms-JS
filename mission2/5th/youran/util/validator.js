import { SELECTOR } from './constant.js'

export function validateSelector(selector) {
  if (!selector || !typeof selector === 'string' || selector.length < 1) {
    throw new Error('selector가 올바르지 않습니다.')
  }

  const $domWithGivenSelector = document.querySelectorAll(`${selector}`)
  if (!$domWithGivenSelector || $domWithGivenSelector.length !== 1) {
    throw new Error('target element를 찾을 수 없습니다.')
  }
}

export function validateData(data) {
  if (!Array.isArray(data)) {
    throw new Error('데이터 형식이 올바르지 않습니다.')
  }

  if (data.length === 0) {
    return
  }

  const isPlainObject = item => toString.call(item) === '[object Object]'
  const isString = v => typeof v === 'string'
  if (!data.some(item => isPlainObject(item) && isString(item.text))) {
    throw new Error('사용 가능한 데이터가 아닙니다.')
  }
}

export function showErrorMessage(
  error,
  selector = SELECTOR.ERROR_MESSAGE_SELECTOR
) {
  document.querySelector(selector).innerHTML = `ERROR! ${error.message}`
  console.log(error)
}
