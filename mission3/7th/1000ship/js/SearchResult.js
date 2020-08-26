function SearchResult(state, $searchResultEl) {
  this.state = state
  this.$searchResultEl = $searchResultEl

  this.setState = (state) => {
    this.state = state
    this.render()
  }

  this.render = () => {
    if (this.state?.error) {
      this.$searchResultEl.innerHTML = `<h1>Error occured</h1><p>${this.state.error}</p>`
      return
    }
    if (this.state?.loading) {
      this.$searchResultEl.innerHTML = '<h2>Loading...</h2>'
      return
    }
    if (this.state?.length === 0) {
      this.$searchResultEl.innerHTML = '<h1>결과 없음</h1>'
      return
    }
    // console.log(JSON.stringify(this.state, null, 2)) // for debugging
    const htmlString = this.state.data
      .map((d) => {
        const img = document.createElement('img')
        img.src = d.imageUrl
        img.style.height = '30vh'
        return img.outerHTML
      })
      .join('')
    this.$searchResultEl.innerHTML = `<h2>Term : ${this.state.term}</h2>${htmlString}`
  }
}

export default SearchResult
