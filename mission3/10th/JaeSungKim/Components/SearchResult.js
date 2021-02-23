function SearchResult({ targetId, initialState }) {
  if (!(this instanceof SearchResult)) {
    return new SearchResult({ targetId, initialState })
  }

  this.results = initialState

  const $target = document.querySelector(targetId)
  const $searchResult = document.createElement('div')
  $target.appendChild($searchResult)

  this.render = () => {
    const altImage = './no_image.png'
    //prettier-ignore
    const htmlString = this.results.map((item) => `
      <img
        src="${item.imageUrl}"
        onerror="this.src='${altImage}'; this.width='200'; this.height='200';"
      />
    `).join('')
    $searchResult.innerHTML = htmlString
  }

  this.setState = (newData) => {
    this.results = newData
    this.render()
  }
}

export default SearchResult
