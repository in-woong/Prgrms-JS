class SearchInput {
  constructor(searchHandler) {
    const $searchInput = document.querySelector('#search-keyword')
    $searchInput.addEventListener('keyup', (e) => {
      searchHandler(e.target.value)
      console.log(e.target.value)
    })
  }
}

export default SearchInput
