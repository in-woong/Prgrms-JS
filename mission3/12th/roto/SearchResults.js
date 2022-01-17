export default function SearchResults({ $target, initialState }) {
    const $searchResults = document.createElement('div')
    $target.appendChild($searchResults)

    this.state = initialState

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
            if (Array.isArray(this.state)) {
                const htmlString = `${this.state.map(d => `<img width="300px" src="${d.imageUrl}">`).join('')}`
      $searchResults.innerHTML = htmlString
    }
  }
  this.render()
}