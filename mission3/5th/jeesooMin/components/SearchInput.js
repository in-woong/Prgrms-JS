// 참고
// https://github.com/learn-programmers/prgrms-fejs/pull/141#issuecomment-558628116
const debounce = (targetFunction, interval) => {
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

    timeoutId = setTimeout(functionToBeCalledLater, interval)
  }
}

function SearchInput(param) {
  if (!(this instanceof SearchInput)) {
    throw new Error('[SearchInput] new 키워드로 실행되지 않았습니다.')
  }

  if (!param.onKeyUp) {
    throw new Error('[SearchInput] onKeyUp 이벤트가 정의되지 않았습니다.')
  }

  const handleKeyUp = e => {
    const value = e.target.value.trimStart()
    this.$target.value = value
    param.onKeyUp(value)
  }

  this.init = function() {
    this.$target = param.$target
    this.$target.addEventListener('keyup', debounce(handleKeyUp, 1000))
  }

  this.init()
}

export default SearchInput
