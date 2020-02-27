//SearchKeyword.js

function SearchKeyword($selector, { onSearch, onAddHistory }) {
  this.$target = document.querySelector($selector)

  this.$target.addEventListener(
    'keyup',
    debounce(e => {
      onSearch(e.target.value)
      onAddHistory(e.target.value)
      e.target.value = ''
      e.target.focus()
    }, debounceTime)
  )
}
