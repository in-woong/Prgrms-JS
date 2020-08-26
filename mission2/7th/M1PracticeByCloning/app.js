function TodoList(data, $target) {
    this.data = data
    this.$target = $target

    this.createTodoListHTMLString = () =>
        this.data.map(({ text, isCompleted }) =>
                            isCompleted ? 
                            `<li><s>${text}</s></li>` : `<li>${text}</li>`
                            ).join('');

    this.render = () => {
        this.$target.innerHTML = 
            `<ul>${this.createTodoListHTMLString()}</ul>`
    }

    this.setState = function(nextData) {
        this.data = nextData
        this.render()
    }
    
    this.render()
}

