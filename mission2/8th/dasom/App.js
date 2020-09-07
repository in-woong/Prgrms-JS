
function App(){
  this.isValid = () => {
    if(this.data === null || this.data === undefined) {
      throw new Error('data가 null 혹은 undefinded입니다.');
    }
    if(!Array.isArray(this.data)) {
        throw new Error('data가 Array가 아닙니다.');
    }
    if(!this.data.every(d=>typeof d.text === 'string' && typeof d.isCompleted === 'boolean')) {
        throw new Error('data의 타입이 적절하지않습니다.');
    }
  }

  this.toggleTodo = (idx) => {
      this.data[idx].isCompleted = !this.data[idx].isCompleted;
      this.render();
  }

  this.deleteTodo = (idx) => {
      this.data.splice(idx, 1);
      this.render();
  }  

  this.deleteAllTodo = () => {
      this.data = [];
      this.render();
  }

  this.addTodo = (todo) => {
    const newData = {
      text: todo,
      isCompleted: false
    }
    this.data.push(newData);
    this.render();
  }

  this.countTodo = () => {
    const completeTodo = this.data.filter((item)=>item.isCompleted);
    const countTodoObj = {
      completeTodo: completeTodo,
      incompleteTodo : this.data.length - completeTodo
    }
    return countTodoObj;
  }

  this.render = () => {
    this.todoList.setState(this.data);
    this.todoCount.render();
    this.localStorage.setData(this.data);
  }

  
  const $target = document.querySelector('#todo-list');
  this.localStorage = new LocalStorage();
  this.data = this.localStorage.getData();
  this.todoList = new TodoList(this.data, $target, this.isValid, this.toggleTodo, this.deleteTodo);
  this.todoInput = new TodoInput($target, this.addTodo, this.deleteAllTodo);
  this.todoCount = new TodoCount($target, this.countTodo);
  
    
}

