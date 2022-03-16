function SearchResult({ $target, initialState }) {
  this.state = initialState || []

  this.setState = (nextData = []) => {
    this.state = nextData
    this.render()
  }

  this.render = () => {
    const jjal = this.state
      .map((value) => {
        return `<li><img src="${value?.imageUrl}" alt="${value?.title}" style="width: 150px"></li>`
      })
      .join('')

    $target.innerHTML = `<ul>${jjal}</ul>`
  }

  this.render()
}

export default SearchResult
