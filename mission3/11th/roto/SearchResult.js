export default function SearchResult({ $app, initialState }) {
  this.$target = document.createElement('div')
  this.state = initialState

  $app.appendChild(this.$target)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const htmlString = `${this.state
      .map(d => `<img src="${d.imageUrl}">`)
      .join('')}`
    this.$target.innerHTML = htmlString
  }

  this.render()
}