class TodoInput {
    constructor($input, $addButton, $removeButton, addTodo) {
        this.$input = $input
        this.$addButton = $addButton
        this.$removeButton = $removeButton
        this.init(addTodo)        
    }
    init(addTodo) {
        this.$addButton.addEventListener('click', () => { // 할일 추가
            if (!this.$input.value) {
                alert('할일을 입력하세요.')
                return
            }
            addTodo(this.$input.value)
            this.$input.value = ''
            this.$input.focus()
        })
        this.$removeButton.addEventListener('click', () => {
            this.$removeButton.dispatchEvent(new CustomEvent('removeAll', { bubbles: true })) 
        })
    }
}

export default TodoInput
