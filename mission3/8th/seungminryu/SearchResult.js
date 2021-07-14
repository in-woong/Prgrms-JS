function SearchResult(state, $searchResult) {
  this.state = state
  this.$searchResult = $searchResult

  this.setState = (state) => {
    this.state = state
    this.render()
  }

  this.render = () => {
    const htmlString = this.state.data
      .map((d) => {
        const img = document.createElement('img')
        img.src = d.imageurl
        img.style.height = '30vh'
        return img.outerHTML
      })
      .join('')
    this.$searchResult.innerHTML = `<h2>Term : ${this.state.term}</h2>${htmlString}`
  }
}
