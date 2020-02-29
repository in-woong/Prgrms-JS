import { ENTER_KEY } from '../constants.js'
function TodoInput(todoInputData) {
  if (!(this instanceof TodoInput)) {
    throw new Error('[TodoInput] new 키워드로 실행되지 않았습니다.')
  }

  const { $element, onInput } = todoInputData

  if (!onInput || typeof onInput !== 'function') {
    throw new Error('[TodoInput] 이벤트 핸들러가 정의되지 않았습니다.')
  }

  this.$element = $element

  this.init = function() {
    this.$element.addEventListener('keypress', e => {
      if (e.key === ENTER_KEY && e.target.value) {
        onInput(e.target.value)
        this.$element.value = ''
      }
    })
  }

  this.init()
}

export default TodoInput
