import { $ } from './utils.js'

const createDebounceFunction = (callback, wait) => {
  let timer = 0
  return (argument) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      if (argument.trim() === '') throw new Error('공백은 입력할 수 없습니다!')
      callback(argument.trim())
      clearTimeout(timer)
    }, wait)
  }
}

export default class SearchInput {
  constructor(showResult) {
    this.input = $('#search-keyword')
    this.showResult = showResult
    this.DebouncedEvnet = createDebounceFunction(showResult, 800)
    this.input.addEventListener('input', ({ target : {value} }) => this.DebouncedEvnet(value))
  }
}
