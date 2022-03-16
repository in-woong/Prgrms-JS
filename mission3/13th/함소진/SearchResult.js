export default function SearchResult(elementId, initialState) {
  this.$searchResult = document.querySelector(elementId)
  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    console.log(this.state)
    this.$searchResult.innerHTML = this.state
      .map(
        (item) => `<li><img src="${item.imageUrl}" alt=${item.title} /></li>`
      )
      .join('')
  }
  this.render()
}
