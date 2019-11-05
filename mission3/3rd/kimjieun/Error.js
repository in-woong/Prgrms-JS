import { createElement } from './utils.js'

function Error(target, error) {
  const $error = createElement('div', 'class', 'error')

  target.appendChild($error).innerHTML = error
}

export default Error
