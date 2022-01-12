function SearchResult({ initialState, $target }) {
  this.state = initialState

  const $searchResult = document.createElement('div')

  $target.appendChild($searchResult)

  this.setState = (nextData) => {
    this.state = nextData
    this.render()
  }

  this.render = () => {
    if (this.state.length === 0) {
      $searchResult.innerHTML = `
        <p>검색 결과가 없습니다</p>
      `
      return
    }

    const images = this.state.map(
      ({ imageUrl }) => `
      <li>
        <img src="${imageUrl}" />
      </li>
    `
    )

    $searchResult.innerHTML = `
      <ul>
        ${images}
      </ul>
    `
  }

  this.render()
}

export default SearchResult
