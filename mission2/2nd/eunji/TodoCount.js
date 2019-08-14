function todoCount($target, data) {
    this.$target = $target
    this.data = data

    this.allTodoNum = function () {
        let allNum = 0
        return allNum = this.data.length
    }
    this.allCompleteNum = function () {
        let complete = 0
        this.data.map(data => {
            data.isCompleted ? complete += 1 : complete
        })
        return complete
    }

    this.setCount = function(data){
        this.data = data
        console.log('3 setcount delte', this.data)
        this.init()
    }

    this.init = function () {
        $target.innerHTML = `
                            <p>총 Todo의 갯수 : ${this.allTodoNum()}</p>
                            <P>총 완료된 Todo의 갯수 : ${this.allCompleteNum()}</P>
                            `
    }

    this.init()
}