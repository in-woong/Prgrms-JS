function TodoCount ({$app,initialState}){
    this.state = initialState
    const $target = document.createElement('div')
    $target.className = "TodoCount"
    this.$target = $target

    $app.appendChild(this.$target)

    this.render = () =>{
        const completedCount = this.state.filter(todo => todo.isCompleted).length
        this.$target.innerHTML =`총 개수 ${this.state.length} / 완료 개수 : ${completedCount}` 
    }

    this.setState = (nextState) =>{
        this.state = nextState
        this.render()
    }

    this.render()
}
