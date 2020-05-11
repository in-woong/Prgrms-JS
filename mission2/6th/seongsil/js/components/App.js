import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';
import { fetchTodoList, postTodo } from '../api/index.js';

const App = function() {
  this.todoData = fetchTodoList() || [];

  const updateState = (newData) => {
    this.todoData = newData;
    this.todoList.setState(this.todoData);
    this.todoCount.setState(this.todoData);
  };

  const $target = document.querySelector('#App');

  this.todoList = new TodoList($target, this.todoData, {
    onUpdate: (newTodoData) => {
      postTodo(newTodoData);
      updateState(newTodoData);
    }
  });

  this.todoInput = new TodoInput($target, this.todoData, {
    onAddTodoItem: (newTodoText) => {
      const newData = this.todoData;
      newData.push({
        text: newTodoText,
        isCompleted: false,
      });
      postTodo(newData);
      updateState(newData);
    }
  });

  this.todoCount = new TodoCount($target, this.todoData);

  $target.addEventListener('todoRemoveAll', (event) =>{
    this.todoData = [];
    postTodo(this.todoData);
    updateState(this.todoData);
  });
};

export default App;
