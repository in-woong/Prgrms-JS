class TodoList {
    constructor($list, data, _this, removeTodo, updateCompleted) {
        this.data = validateData(data)
        this.$list = validateElement($list)
        this.init(_this, removeTodo, updateCompleted)
        this.render()
    }    
    init(_this, removeTodo, updateCompleted) {
        this.$list.addEventListener('click', (e) => {
            if (e.target.classList.contains('todo-delete')) { // 할일 삭제
                const id = e.target.parentNode.dataset.id
                removeTodo.call(_this, id)
            } else {
                const id = e.target.nodeName === 'S' ? 
                    e.target.parentNode.dataset.id : 
                    e.target.dataset.id
                updateCompleted.call(_this, id)
            }
        })
    }
    render() {
        this.$list.innerHTML = `<ul>
            ${this.data.map(({ text, isCompleted }, index) =>
                `<li data-id="${index}">
                    ${isCompleted ? '<s>'+text+'</s>' : text}
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
