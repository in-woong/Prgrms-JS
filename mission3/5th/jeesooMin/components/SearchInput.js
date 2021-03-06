import { DEBOUNCE_TIME } from '../constants.js'

// 참고
// https://github.com/learn-programmers/prgrms-fejs/pull/141#issuecomment-558628116
const debounce = (targetFunction, debounceTime) => {
  let timeoutId = null

  return (...args) => {
    const functionToBeCalledLater = () => {
      clearTimeout(timeoutId)
      timeoutId = null
      return targetFunction(...args)
    }

    if (timeoutId) {
      return
    }

    timeoutId = setTimeout(functionToBeCalledLater, debounceTime)
  }
}

function SearchInput({ $target, onKeyUp }) {
  if (!(this instanceof SearchInput)) {
    throw new Error('[SearchInput] new 키워드로 실행되지 않았습니다.')
  }

  if (!onKeyUp || typeof onKeyUp !== 'function') {
    throw new Error('[SearchInput] onKeyUp 이벤트가 정의되지 않았습니다.')
  }

  const handleKeyUp = e => {
    const value = e.target.value.trimStart()
    this.$target.value = value
    onKeyUp(value, true)
  }

  this.setState = function(newData) {
    this.$target.value = newData
  }

  this.init = function() {
    this.$target = $target
    this.$target.addEventListener('keyup', debounce(handleKeyUp, DEBOUNCE_TIME))
  }

  this.init()
}

export default SearchInput
