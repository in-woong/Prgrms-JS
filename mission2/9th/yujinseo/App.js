import { setTodoData, getTodoData } from './data.js';
import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';

function App() {
  this.data = getTodoData || [];

  this.$removeAllBtn = document.querySelector('#todo-remove-all');

  this.init = function () {
    this.todoInput = new TodoInput(addTodo);
    this.todoList = new TodoList(this.data, removeTodo, toggleTodo);
  }

  this.setState = (data) => {
    this.todoList.setState(data);
  }

  const removeTodo = (index) => {
    this.data.splice(index, 1);
    this.setState(this.data);
    setTodoData(this.data);
  }

  const toggleTodo = (index) => {
    this.data[index].isCompleted = !this.data[index].isCompleted;
    this.setState(this.data);
  }

  const addTodo = (newTodo) => {
    this.data.push(newTodo);
    this.setState(this.data);
    setTodoData(this.data);
  }

  this.$removeAllBtn.addEventListener('click', () => {
    this.data = [];
    this.setState(this.data);
    setTodoData([]);
  })

  this.init();
}

export default App;