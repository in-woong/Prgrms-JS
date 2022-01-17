export default function TodoCount ({$app, state}){
    this.$target = document.createElement('p')
    this.state = state
    $app.appendChild(this.$target)

    this.render = function (){
        this.$target.innerHTML = `Total Count : ${this.state.length}  Completed Count : ${this.state.filter(({isCompleted})=>isCompleted).length}`
    }
    this.setState = function (nextState) {
        this.state = nextState
        this.render()
    }
    this.render()
}
