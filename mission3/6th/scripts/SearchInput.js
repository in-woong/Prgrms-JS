class SearchInput {
  constructor(searchHandler) {
    let timer = null
    const $searchInput = document.querySelector('#search-keyword')
    $searchInput.addEventListener('keyup', (e) => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        searchHandler(e.target.value)
        console.log(e.target.value)
      }, 250)
    })
  }
}

export default SearchInput
