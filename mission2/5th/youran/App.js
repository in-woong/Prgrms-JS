function App(data) {

  this.initialize = () => {
    this.data = getData();
    try{
      this.todoList = new TodoList(
        this.data, 
        'todo-list', 
        deleteTodo, 
        setTodoCompleted
        );
    }catch(error) {
      console.log(error);
      return;
    }
    this.todoInput = new TodoInput('todo-input', insertTodo);
  }

  const insertTodo = (newTodoText) => {
    this.data.push({
      id: this.data.length + 1 + '',
      text: newTodoText,
      isCompleted: false,
    });
    this.todoList.setState(this.data);
  }

  const deleteTodo = (todoId) => {
    this.data = this.data.filter(item => item.id !== todoId );
    this.todoList.setState(this.data);
  }

  const setTodoCompleted = (todoId) => {
    this.data.forEach(item => {
      if(item.id === todoId && !item.isCompleted){
        item.isCompleted = true;
      }
    })
    this.todoList.setState(this.data);
  }

  this.initialize();

}

const getData = function() {
  return [
    {
      id: '1',
      text: 'JS 공부하기',
      isCompleted: true
    },
    {
      id: '2',
      text: 'JS 복습하기',
      isCompleted: false
    }
  ];
} 
