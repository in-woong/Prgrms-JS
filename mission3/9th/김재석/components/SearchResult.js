function SearchResult($app, state) {
    const target = document.createElement("div")
    target.className = "search-result"

    this.target = target
    $app.appendChild(this.target)
    this.state = state
    this.render = function() {
        const htmlString = `${this.state.result
            .map(data => `<img src="${data.imageUrl}">`)
            .join('')}`
          document.querySelector('.search-result').innerHTML = htmlString
    }

    this.setState = function(nextState) {
        this.state = nextState
        this.render()
    }

}

export default SearchResult