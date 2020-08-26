function SearchResult(loadData, target) {
  this.$ul = document.querySelector(`${target} ul`)
  this.loadedData = loadData

  this.render = () => {
    const htmlString = `${this.loadedData
      .map((resultData) => `<li><span>Title : ${resultData.title}</span><img src="${resultData.imageUrl}" alt="${resultData.title}"></li>`)
      .join('')}`
    this.$ul.innerHTML = htmlString
  }
  this.setState = (nextData) => {
    this.loadedData = nextData
    this.render()
  }
  this.render()
}

export default SearchResult
