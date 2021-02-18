function TodoList(initialState, element) {      
    this.state = initialState

    this.validation = () => {
        if (!new.target) {
        throw new Error('use the new keword to create a TodoList')
        }

        errorCheck(this.state, element)
    } 

    this.render = function() {
        var renderString = this.state.map(({ text, isCompleted }) => isCompleted === true ? `<div><s>${text}</s></div>` : `<div>${text}</div>`).join(' ')
        element.innerHTML = renderString
    }

    this.setState = (nextState) => {
        errorCheck(nextState, element)
        this.state = nextState
        this.render()
    }

    this.validation()
    this.render()
}
