let data = window.localStorage;

function App(data){

    // localStorage 파악
    if(data.length === 0) this.data = new Array;
    else this.data = JSON.parse(data.getItem('key'));

    // 아래 컴포넌트 선언
    this.todoList = new TodoList(this.data, 'todo-list', this.todoCount);
    this.todoCount = new TodoCount(this.data);
    this.todoInput = new TodoInput(this.data, this.todoList, this.todoCount);

    // todoList, todoCount render
    this.todoList.render();
    this.todoCount.render(this.data);
    
    // removeAll 이벤트 선언
    const removeAll = new Event('removeAll');
    document.getElementById('removeBtn').addEventListener('removeAll', (e) => {
        this.data = [];
        this.todoList.setStatus(this.data);
        this.todoCount.setStatus(this.data);
        this.todoInput.setStatus(this.data);
        window.localStorage.clear();
    }, false);
    document.getElementById('removeBtn').addEventListener('click', () => {
        document.getElementById('removeBtn').dispatchEvent(removeAll);
    })
    
    // 완료, 미완료 표시
    let listItems = document.getElementById('todo-list');
    listItems.addEventListener('click', (e) => {
        let listNo = e.target.dataset.no;
        this.data[listNo].isCompleted = !this.data[listNo].isCompleted;
        this.todoList.setStatus(this.data);
        this.todoCount.setStatus(this.data);
        window.localStorage.setItem('key', JSON.stringify(this.data));
    })

    
}

new App(data);