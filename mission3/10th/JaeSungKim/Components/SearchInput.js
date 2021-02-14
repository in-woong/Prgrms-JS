function SearchInput({ $app, onSearchInput }) {
  if (!(this instanceof SearchInput)) {
    return new SearchInput({ $app, onSearchInput })
  }

  const $searchInput = document.createElement('input')
  $app.appendChild($searchInput)

  $searchInput.addEventListener('input', (e) => {
    const input = e.target.value
    debounce(() => {
      onSearchInput(input)
    }, 600)
  })

  this.setState = (newInput) => {
    $searchInput.value = newInput
  }

  let timer
  const debounce = (func, wait) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(func, wait)
  }
}

export default SearchInput
