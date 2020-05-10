class TodoList {
    constructor($list, data, removeTodo, updateCompleted) {
        this.data = validateData(data)
        this.$list = validateElement($list)
        this.init(removeTodo, updateCompleted)
        this.render()
    }    
    init(removeTodo, updateCompleted) {
        this.$list.addEventListener('click', (e) => {
            if (e.target.classList.contains('todo-delete')) { // 할일 삭제
                const id = e.target.parentNode.dataset.id
                removeTodo(id)
            } else {
                const id = e.target.nodeName === 'S' ? 
                    e.target.parentNode.dataset.id : 
                    e.target.dataset.id
                updateCompleted(id)
            }
        })
    }
    render() {
        this.$list.innerHTML = `<ul>
            ${this.data.map(({ text, isCompleted }, index) =>
                `<li data-id="${index}">
                    ${isCompleted ? `<s>${text}</s>` : text}
                    <button class="todo-delete">삭제</button>
                </li>`
            ).join('')}
        </ul>`
    }
    setState(nextData) {
        this.data = validateData(nextData)
        this.render()
    }
}

export default TodoList
