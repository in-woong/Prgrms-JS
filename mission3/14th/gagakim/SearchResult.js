function SearchResult({$target, initialState}) {

    this.$target = $target
    this.$searchResult = document.createElement('div')
    $target.appendChild(this.$searchResult)
    this.state = initialState

    this.setState = (newState) => {
        this.state = newState
        this.render()
    }

    this.render = () => {
        this.$searchResult.innerHTML = this.state
            .map((item) => `<img src="${item.imageUrl}">`)
            .join('')
    }

    this.render()
}
