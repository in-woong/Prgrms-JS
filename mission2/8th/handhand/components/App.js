import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import { data1 } from '../data.js';


function App($app) {
  this.todos = data1;
  this.todoInput = new TodoInput({
    $target: $app,
    addTodo: this.addTodo.bind(this),
  });
  this.todoList = new TodoList({
    $target: $app,
    todos: this.todos,
  });
}

App.prototype.addTodo = function(todo) {
  this.todos = [...this.todos, todo];
  this.todoList.setState(this.todos);
}

App.prototype.removeTodo = function() {
  
}

export default App;
