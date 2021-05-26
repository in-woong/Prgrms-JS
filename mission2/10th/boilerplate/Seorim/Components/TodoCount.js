function TodoCount({ $app, data }) {
    this.state = data

    const $target = document.createElement('div')
    $target.className = 'TodoCount'
    $app.appendChild($target)

    this.render = () => {
        const done = this.state.filter((todo) => todo.isCompleted).length
        $target.innerHTML = `총 할일: ${this.state.length} / 완료된 일: ${done}`
    }

    this.setState = (nextData) => {
        this.state = nextData
        this.render()
    }

    this.render()

}

export default TodoCount
