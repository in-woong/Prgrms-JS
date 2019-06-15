function SearchResult(initalData, target) {
  const $target = document.querySelector(target)
  let data = initalData

  this.setState = function (nextData) {
    data = nextData
    this.render()
  }
  this.render = function () {
    if (!data) {
      throw new Error('[SearchResult] data가 올바르지 않습니다.')
    }
    if (!data.hasOwnProperty('images')) {
      throw new Error('[SearchResult] data에 images parameter가 없습니다.')
    }

    const keyword = data.keyword
    const images = data.images

    const searchKeywordHTMLString = typeof keyword === 'string' && keyword.length > 0 ? `<h1>${keyword} search result</h1>` : ''
    const imagesHTMLString = `${images.map((d) => `<img src="${d.imageUrl}">`).join('')}`

    $target.innerHTML = `${searchKeywordHTMLString}<div>${imagesHTMLString}</div>`

  }
}
