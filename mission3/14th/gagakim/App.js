function App({$target}) {

    this.$target = $target

    this.searchInputComponent = new SearchInput({
        $target: this.$target,
        onKeyup: (inputText) => {
            if (!inputText) return

            fetch(`https://jjalbot.com/api/jjals?text=${inputText}`, {mode: 'cors'})
                .then((x) => x.json())
                .then((data) => {
                    this.searchResultComponent.setState(data)
                })
                .catch((error) => {
                    this.searchResultComponent.setState([])
                })
        }
    })

    this.searchResultComponent = new SearchResult({
        $target: this.$target,
        initialState: []
    })

    this.setState = (newState) => {
        this.searchResultComponent.setState(newState)
        this.render()
    }

    this.render = () => {
        this.searchInputComponent.render()
        this.searchResultComponent.render()
    }

    this.render()
}
