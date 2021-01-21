export default function TodoCount({$app, initialState}){
    const $target = document.querySelector('#todo-count')
    this.$target = $target
    this.state = initialState

    this.getCount = () => ({
        totalCount: this.state.length,
        completedCount: this.state.filter(todo => todo.isCompleted).length
    })

    this.render = () => {
        const {totalCount, completedCount} = this.getCount()
        this.$target.innerHTML = `Total Count: ${totalCount} / Completed Count: ${completedCount}`
    }

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render()
}