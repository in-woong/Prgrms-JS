function TodoInput($target, todoList, data) {
    if (!(this instanceof TodoInput)) {
        throw new Error('New로 호출해 주세요.')
    }

    this.$target = $target
    this.todoList = todoList
    this.data = data

    this.$target.addEventListener('keypress', e => {
        if (e.key === 'Enter' && e.target.value) {
            this.data.push({ isCompleted: false, text: e.target.value })
            this.todoList.setState(this.data)
            this.$target.value = ''
        }
    })
}
