export default function TodoList(params) {
    this.$target = params.$todoList
    this.onRemove = params.onRemove
    this.onClick = params.onClick
    this.removeAll = params.removeAll
    this.data = params.data

    this.setState = (newData) => {
        this.data = newData
        this.render()
    }

    this.$target.addEventListener('click', (e) => {
        if (e.target.className === 'remove-button') {
            const id = e.target.closest('li').dataset.id
            this.onRemove(id)
        }
        else if (e.target.className === "remove-all") {
            this.removeAll()
        }
        else {
            const id = e.target.closest('li').dataset.id
            this.onClick(id)
        }
        
    })

    this.render = () => {
        const htmlString = this.data.map((element) => element.isCompleted ? 
        `<li data-id=${element._id}><span>${element.content}</span><button class="remove-button">지우기</button></li>`
        : `<li data-id=${element._id}><s>${element.content}</s><button class="remove-button">지우기</button></li>`)
        this.$target.innerHTML = `<ol>${htmlString.join('')}</ol><button class="remove-all">모두 삭제하기</button>`
    }
}
