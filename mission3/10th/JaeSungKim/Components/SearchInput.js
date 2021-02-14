function SearchInput({ $app, onSearchInput }) {
  if (!(this instanceof SearchInput)) {
    return new SearchInput({ $app, onSearchInput })
  }

  const $searchInput = document.createElement('input')
  $app.appendChild($searchInput)

  let timer
  $searchInput.addEventListener('input', (e) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      const input = e.target.value
      onSearchInput(input)
    }, 800)
  })

  this.setState = (newInput) => {
    $searchInput.value = newInput
  }
}

export default SearchInput
