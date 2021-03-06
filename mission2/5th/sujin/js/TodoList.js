function TodoList(data, $el) {
    // new 키워드 안붙이고 함수 실행시 에러발생하게 하기
    // TodoList의 객체인지 아닌지 판단
    if( !this instanceof TodoList ) {
        throw new Error("instance type error")
    }

    this.data = data
    this.$el = $el
        
    this.createHTMLString = function (data) {
        this.errCheck(data)

        return data.reduce((acc, item) => {
            if (item.isCompleted === true) {
                acc += `<li><del>${item.text}</del><button type="button">X</button></li>`
            }
            else {
                acc += `<li>${item.text}<button type="button">X</button></li>`
            }
            return acc
        }, '') 
    }

    this.render = function () {
        $el.innerHTML = `<ul class="todo_list">${this.createHTMLString(this.data)}</ul>`
    }

    this.errCheck = function (todos) {
        // array가 아닌 형태로 넘어오면? 
        // null 혹은 undefined가 넘어오면? 
        // !Array.isArray(todos) 
        if (!(todos instanceof Array)) { 
            throw new Error("data type array")
        }

        if (todos === "undefined" || todos === null || todos === '') {
            throw new Error("data type error")
        }
    }

    this.setState = function (nextData) {
        this.data = nextData
        this.render()
    }
}
export default TodoList
