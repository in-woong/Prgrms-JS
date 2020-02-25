//SearchKeyword.js

function SearchKeyword($selector, { onSearch, onAddHistory }) {
  this.$target = document.querySelector($selector)

  this.$target.addEventListener('keyup', e => {
    const inputValue = e.target.value
    debounce(() => {
      onSearch(inputValue)
      onAddHistory(inputValue)
      e.target.value = ''
      e.target.focus()
    }, debounceTime)
  })
}
