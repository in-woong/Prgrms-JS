function onSaveStorage(data){
    console.log(data);
    localStorage.setItem('local-todo',JSON.stringify(data));
}

function App(){
    let todos = localStorage.getItem('local-todo') !== null ? JSON.parse(localStorage.getItem('local-todo')) : [];
    console.log(todos);

    const self = this;
    //TodoList
    this.onRemoveItem = function(idx){
        todos.splice(idx,1);
        onSaveStorage(todos);
        self.state(todos);
    }

    this.onToggleItem = function(idx){
        todos[idx].isCompleted = !todos[idx].isCompleted;
        onSaveStorage(todos);
        self.state(todos);
    }

    this.onAddItem = function(text){
        todos.push({id: (new Date().toLocaleString()).trim(), text : text , isCompleted : false});
        onSaveStorage(todos);
        self.state(todos);
    }

    this.onRemoveAllItem = function(){
        if(todos.length > 0){
            todos = [];
            onSaveStorage(todos);
            self.state(todos);  
        }else{
            throw new Error('할 일의 갯수가 1개 이상이여야 삭제 가능합니다');
        }
    }

    let todoList = new TodoList(todos,'todo-list',this.onRemoveItem,this.onToggleItem);
    todoList.render();
    
    let todoCount = new TodoCount(todos);
    todoCount.render();

    const todoInput = new TodoInput(this.onAddItem , this.onRemoveAllItem);
        
    this.state = function(data){
        todoList.setState(data);
        todoCount.render(data);
    }
}