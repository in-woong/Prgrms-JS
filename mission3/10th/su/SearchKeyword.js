import debounce from './Util.js';

class SearchKeyword {
  constructor(selector, onSearchHandler) {
    this.target = document.querySelector(selector)
    this.target.focus()

    const returnFunc = debounce(function(e) {
      onSearchHandler(e.target.value)
      e.target.value = ''
    }, 1000);
    
    this.target.addEventListener('input', returnFunc)
  }  

  validation = () => {}

  setState = () => {}

  render = () => {}
}

export default SearchKeyword
