import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';
import { fetchTodoList, postTodo } from '../api/index.js';

const App = function() {
  this.todoData = fetchTodoList() || [];
  this.todoCountData = {
    todoCompletedCount: this.todoData.filter(todo => todo.isCompleted).length,
    todoCount: this.todoData.length
  };

  const updateState = (newData) => {
    this.todoData = newData;
    this.todoList.setState(this.todoData);
    this.todoCountData.todoCompletedCount = this.todoData.filter(todo => todo.isCompleted).length;
    this.todoCountData.todoCount = this.todoData.length;
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

  this.todoCount = new TodoCount($target, this.todoData, this.todoCountData);

  $target.addEventListener('todoRemoveAll', (event) =>{
    const isConfirmRemoveAll = confirm('정말 전체 삭제하실 건가요?');

    if (isConfirmRemoveAll) {
      this.todoData = [];
      postTodo(this.todoData);
      updateState(this.todoData);
    }
  });
};

export default App;
