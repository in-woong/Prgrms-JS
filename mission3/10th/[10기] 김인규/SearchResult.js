function SearchResult({$target , initalState}){
    this.state = initalState

    this.setState = (nextState) =>{
        this.state = nextState
        this.render()
    }

    this.render = () =>{
        $target.innerHTML = this.state.map(({imageUrl}) =>{
            return `<img src =${imageUrl}>`
        }).join("")
    }
    this.render()
}
