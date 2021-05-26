function App($app){
    const initialState = JSON.parse(localStorage.getItem('TodoListData'))

    if (initialState === null) {
        localStorage.setItem('TodoListData',JSON.stringify([]))
        this.state = []
    }else{
        this.state = initialState
    }

    const onCompleteToogle = (index) => {
        const nextState = [...this.state]
        nextState[index] = {
            text : nextState[index].text,
            isCompleted : !nextState[index].isCompleted
        }
        this.state = nextState
        this.setState(nextState)
    }

    const onInput = (todoInputData) =>{
        const nextState = [...this.state,{text:todoInputData,isCompleted : false}]
        this.state = nextState
        this.setState(nextState)
    }

    const onDelete = (index) =>{
        const nextState = this.state.filter((todoItem, idx, arr)=>{
            return idx != index
        })
        this.state = nextState
        this.setState(this.state)
    }

    this.setState = (nextState) =>{
        this.state = nextState
        this.todoList.setState(nextState)
        this.todoCount.setState(nextState)
        localStorage.setItem('TodoListData',JSON.stringify(this.state))
    }

    $app.addEventListener('removeAll',(e)=>{
        const nextState = []
        this.state = nextState
        this.setState(nextState)
    })

    this.todoList = new TodoList({$app,
        TodoListData : this.state,
        onCompleteToogle,
        onDelete
    })
    this.todoInput = new TodoInput({$app,onInput})
    this.todoCount = new TodoCount({$app,initialState : this.state})

}
