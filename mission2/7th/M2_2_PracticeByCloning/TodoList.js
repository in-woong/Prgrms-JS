function TodoList({ $target, data, onTodoClick }) {
    this.data = data
    this.$target = document.createElement('div')
    $target.appendChild(this.$target)

    this.createTodoListHTMLString = () =>
        this.data.map(({ text, isCompleted }, index) =>
                            `<div class='todo-item' data-index='${index}'>${isCompleted ? 
                                `<li><s>${text}</s></li>` : `<li>${text}</li>`}`
                    ).join('');

    this.render = () => {
        this.$target.innerHTML = 
            `<ul>${this.createTodoListHTMLString()}</ul>`
    }

    this.setState = function(nextData) {
        // 불필요한 렌더링 제한, nextData에 변경된 부분이 있을 경우 렌더링
        if(JSON.stringify(nextData) !== JSON.stringify(this.data)){
            this.data = nextData
            this.render()
            this.bindEvent()
        }
    }
    
    this.bindEvent = () => {
        this.$target.querySelectorAll('.todo-item').forEach($item =>{
            $item.addEventListener('click', (e) => {
                const { index } = e.target.dataset
                alert(index)
            })
        })
    }
    this.render()
    this.bindEvent()
}