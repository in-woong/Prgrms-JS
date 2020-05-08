class TodoList {
    constructor($list, data) {
        this.data = validateData(data)
        this.$list = validateElement($list)
        this.render()
    }    
    render() {
        this.$list.innerHTML = `<ul>
            ${this.data.map(({ text, isCompleted }, index) =>
                `<li id="${index}">
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
