import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';


function App($app) {
  this.todos = [];
  this.todoInput = new TodoInput({
    $target: $app,
    addTodo: this.addTodo.bind(this),
  });
  this.todoList = new TodoList({
    $target: $app,
    todos: this.todos,
    doneTodo: this.doneTodo.bind(this),
    removeTodo: this.removeTodo.bind(this),
  });
  this.todoCount = new TodoCount({
    $target: $app,
    totalTodoCount: this.totalTodoCount.bind(this),
    doneTodoCount: this.doneTodoCount.bind(this),
  });
}

App.prototype.addTodo = function(todo) {
  this.todos = [...this.todos, todo];
  this.todoList.setState(this.todos);
  this.todoCount.render();
}

App.prototype.doneTodo = function(key) {
  const newTodos = [...this.todos];
  const currentStatus = newTodos[newTodos.findIndex(todo => todo.hash === key)].isCompleted;
  newTodos[newTodos.findIndex(todo => todo.hash === key)].isCompleted = !currentStatus;
  this.todos = newTodos;
  this.todoList.setState(this.todos);
  this.todoCount.render();
}

App.prototype.removeTodo = function(key) {
  const newTodos = [...this.todos];
  newTodos.splice(newTodos.findIndex(todo => todo.hash === key), 1);
  this.todos = newTodos;
  this.todoList.setState(this.todos);
  this.todoCount.render();
}

App.prototype.totalTodoCount = function() {
  return this.todos.length;
}

App.prototype.doneTodoCount = function() {
  return this.todos.filter(todo => todo.isCompleted).length;
}

export default App;
