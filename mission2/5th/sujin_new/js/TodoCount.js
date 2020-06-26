function TodoCount ($target, data) {
    this.$target = $target
    this.data = data

    this.render = () => {
        let count = 0
        this.data.forEach( item => {
            if(item.isCompleted) count += 1
        })
        this.$target.innerHTML = `
            전체 TODO : ${this.data.length} <br>
            완료된 TODO : ${count}
        `
    }

    this.setState = (nextData) => {
        this.data = nextData
        this.render()
    }

    this.render()
}
export default TodoCount
