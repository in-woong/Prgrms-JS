function TodoList($target, data) {
    this.$target = $target
    this.data = data

    this.render = function() {
        this.$target.innerHTML = this.data
            .map(todo => todo.isCompleted?`<div data-idx="${todo.id}"><s>${todo.text}</s><button class="remove">삭제</button></div>`:`<div data-idx="${todo.id}">${todo.text}<button class="done">완료</button><button class="remove">삭제</button></div>`)
            .join('')
    }

    this.setState = function(nextData) {
        this.data = nextData
        this.render()
    }

    this.addList = function(addData){
        this.setState([...this.data,{
            id:String(Date.now()),
            text:addData,
            isCompleted:false
        }])
    }

    this.remove = function(id){
        this.data = this.data.filter(item=>item.id !== id)
        this.setState(this.data)
    }

    this.done = function(id){
        const nextData = this.data
        const index = nextData.findIndex((item) => item.id == id)
        nextData[index].isCompleted = !nextData[index].isCompleted
        this.setState(nextData)
    }

    this.render()
}

function addTodoList(input){
    if(input.value==''){
        alert('빈 값은 입력안됩니다.');
        return false
    }
    todoList.addList(input.value)
    todoInput.value=''
}