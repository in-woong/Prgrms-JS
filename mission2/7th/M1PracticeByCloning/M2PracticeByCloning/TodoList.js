function TodoList($target, data) {
    this.data = data
    this.$target = $target

    this.createTodoListHTMLString = () =>
        this.data.map(({ text, isCompleted }) =>
                            isCompleted ? 
                            `<li><s>${text}</s></li>` : `<li>${text}</li>`
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
        }
    }
    
    this.render()
}