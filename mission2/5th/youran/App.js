function App() {

  const TODO_LIST_SELECTOR = 'todo-list';
  const TODO_INPUT_SELECTOR = 'todo-input';

  this.initialize = () => {
    this.data = getData();
    try{
      this.todoList = new TodoList(
        this.data, 
        TODO_LIST_SELECTOR, 
        deleteTodo, 
        setTodoCompleted
        );
    }catch(error) {
      showErrorMessage(error);
      return;
    }
    this.todoInput = new TodoInput(TODO_INPUT_SELECTOR, insertTodo);
  }

  this.setState = (nextData) => {
    try{
      isValidData(nextData);
      this.data = nextData;
      this.todoList.setState(nextData);
    }catch(error) {
      console.log(error);
    }
    
  }


  const insertTodo = (newTodoText) => {
    const nextData = this.data;
    nextData.push({
      id: (this.data.length + 1).toString(),
      text: newTodoText,
      isCompleted: false,
    });
    this.setState(nextData);
    //this.todoList.setState(nextData);
  }

  const deleteTodo = (todoId) => {
    const nextData = this.data.filter(item => item.id !== todoId );
    this.setState(nextData);
  }

  const setTodoCompleted = (todoId) => {
    const nextData = this.data;
    const index = nextData.findIndex(item => item.id === todoId);
    nextData[index].isCompleted = true;
    this.setState(nextData);
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
