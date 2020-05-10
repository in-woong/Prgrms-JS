class TodoInput {
    constructor($input, $button, addTodo) {
        this.$input = $input
        this.$button = $button
        this.init(addTodo)        
    }
    init(addTodo) {
        this.$button.addEventListener('click', () => { // 할일 추가
            if (!this.$input.value) {
                alert('할일을 입력하세요.')
                return
            }
            addTodo(this.$input.value)
            this.$input.value = ''
            this.$input.focus()
        })
    }
}

export default TodoInput
