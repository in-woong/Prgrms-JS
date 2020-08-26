function SearchHistory($target, searchedKeywords) {
  this.$target = $target
  this.searchedKeywords = searchedKeywords

  this.render = () => {
    const htmlString = `<p>검색 이력</p><ul>${this.searchedKeywords.map(
      (searchedKeyword) => `<li>${searchedKeyword}</li>`
    )}</ul>`

    this.$target.innerHTML = htmlString
  }

  this.render()
}

export default SearchHistory
