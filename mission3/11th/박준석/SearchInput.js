import { $, createDebounceFunction } from './utils.js'



export default class SearchInput {
  constructor(showResult) {
    this.input = $('#search-keyword')
    this.showResult = showResult
    this.debouncedEvnetHandler = createDebounceFunction(showResult, 800)
    this.input.addEventListener('input', ({ target : {value} }) => {
      const inputValue = value.trim();
      if (inputValue === ''){
        throw new Error('공백은 입력할 수 없습니다!')
      }
      this.debouncedEvnetHandler(inputValue)
    })
  }
}
