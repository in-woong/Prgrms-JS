export default function SearchResult({ $app, initialState }) {

  const $searchResult = document.createElement('div')
  $searchResult.className = 'SearchResult'
  $app.appendChild($searchResult)
  
  this.state = initialState
  this.$target = $searchResult

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
}
