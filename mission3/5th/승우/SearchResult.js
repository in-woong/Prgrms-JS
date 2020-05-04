//SearchResult.js

function SearchResult({ data, $selector }) {
  validateData(data)
  validateSelector($selector)

  this.data = data || []
  this.$target = document.querySelector($selector)

  this.render = () => {
    const HtmlString =
      this.data.length >= 1
        ? this.data
            .map(d => {
              return `<img src="${d.imageUrl}">`
            })
            .join('')
        : '결과가 없습니다.'

    this.$target.innerHTML = HtmlString
  }

  this.setState = newData => {
    this.data = newData
    this.render()
  }
}
