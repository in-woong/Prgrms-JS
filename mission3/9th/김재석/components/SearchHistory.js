function SearchHistory($app, state, inputkeyword) {
    const target = document.createElement("div")
    target.className = "search-history"
    

    this.target = target
    $app.appendChild(this.target)
    this.state = state
    this.inputkeyword = inputkeyword

    this.render = function () {
        const htmlString = this.state.history
        .map(history => `<u>${history}</u>&nbsp`)
        .join('')

        document.querySelector(".search-history").innerHTML = htmlString
    }

    this.setState = function(nextState) {
        this.state = nextState
        this.render()
    }

    this.target.addEventListener('click', (e) => {
        this.inputkeyword(e.target.innerText, false)
        
    })

}

export default SearchHistory