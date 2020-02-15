function App(data) {
    this.data = data;

    const $todoList = document.querySelector('.todo-list')
    const todoList = new TodoList($todoList, this.data);
    
    const $todoCount = document.querySelector('.todo-count');
    const todoCount = new TodoCount($todoCount, this.data);

    const $todoChangeOrDel = document.querySelector('.todo-list-top') // todolist 상위 연결클래스(이벤트 위임적용위함)
    const todoChangeOrDel = new TodoChangeOrDel($todoChangeOrDel, this.data, (data) => {
        this.data = data;
        todoList.setState(this.data)
        todoCount.setState(this.data)
    })

    const $todoInput = document.querySelector('#todo-input')
    const todoInput = new TodoInput($todoInput, (text) =>{
        this.data.push({
            text: text,  // 키,값이 같으므로 text로 생략가능함
            isCompleted: false,
        })
        todoList.setState(this.data)
        todoCount.setState(this.data)

    })
    $todoInput.focus()  // 자동으로 커서를 여기로 이동

    this.setState = function (nextData){
        this.data = nextData;
        this.todoList.setState(this.data)
        this.todoCount.setState(this.data)
    }
}