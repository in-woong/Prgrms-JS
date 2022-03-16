function SearchResult({ $target, initialState }) {
  this.$target = $target
  this.state = initialState

  this.render = () => {
    const { data, isInitial } = this.state

    if (isInitial) {
      $target.innerHTML =
        '<br /><div>입력창에 검색어를 입력하여 원하는 짤을 검색해보세요!</div>'
      return
    }

    if (data.length === 0) {
      $target.innerHTML =
        '<br /><div>검색 결과가 존재하지 않습니다.</div><div>다른 키워드로 검색해보세요!</div>'
      return
    }

    const htmlString = `${data
      .map((item) => `<img src="${item.imageUrl}" alt="${item.title}" />`)
      .join('')}`
    $target.innerHTML = htmlString
  }

  this.setState = (newState) => {
    this.state = newState

    this.render()
  }

  this.render()
}

export default SearchResult
