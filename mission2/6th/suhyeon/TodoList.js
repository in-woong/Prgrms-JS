class TodoList {
    constructor($list, data) {
        validateData(data)
        validateElement($list)
        this.data = data
        this.$list = $list
        this.init()
        this.render()
    }    
    init() {        
        this.$list.addEventListener('click', (e) => {
            if (e.target.classList.contains('todo-delete')) { // 할일 삭제                
                this.$list.dispatchEvent(new CustomEvent('removeTodo', {
                    bubbles: true,
                    detail: {
                        id : e.target.parentNode.dataset.id
                    }
                })) 
            } else {
                this.$list.dispatchEvent(new CustomEvent('updateCompleted', { // 할일 완료 처리
                    bubbles: true,
                    detail: {
                        id: e.target.nodeName === 'S' ?
                            e.target.parentNode.dataset.id :
                            e.target.dataset.id
                    }
                }))                 
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
        validateData(nextData)
        this.data = nextData
        this.render()
    }
}

export default TodoList
