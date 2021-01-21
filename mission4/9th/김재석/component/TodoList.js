export default function TodoList($app, state, delTodo, toggleComp) {
    const target = document.createElement("div")
    target.className = "todo-list"
    $app.appendChild(target)
    
    this.target = target
    this.state = state
    this.delTodo = delTodo
    this.toggleComp = toggleComp
    this.render = () => {
        const todo_list = this.state.map(todo => `<li class="list" id=${todo._id}>` + (todo.isCompleted ? `<s class="slist">${todo.content}</s>` : `${todo.content}`)
         + '<button class="del-todo">삭제</button></li>').join('')
        this.target.innerHTML = todo_list
    }

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.target.addEventListener("click", e => {
        if(e.target.className === "del-todo"){
            this.delTodo(e.target.parentNode.id)
        } else if(e.target.className === "list"){
            this.toggleComp(e.target.id)
        } else if (e.target.className === "slist") {
            this.toggleComp(e.target.parentNode.id)
        }
    })

}