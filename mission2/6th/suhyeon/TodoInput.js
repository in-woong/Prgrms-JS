class TodoInput {
    constructor($input, $button, _this, addTodo) {
        this.$input = $input
        this.$button = $button
        this.init(_this, addTodo)        
    }
    init(_this, addTodo) {
        this.$button.addEventListener('click', () => { // 할일 추가
            if (!this.$input.value) {
                alert('할일을 입력하세요.')
                return
            }
            addTodo.call(_this, this.$input.value)
            this.$input.value = ''
            this.$input.focus()
        })
    }
}

export default TodoInput
