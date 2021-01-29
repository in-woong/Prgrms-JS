import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import TodoInput from './TodoInput.js';
import { KEY_CODE_ENTER } from './constants.js';

function App() {
  let todoListData = [];

  this.addTodo = function(e) {
    const newTodo = {
      text: e.target.value,
      isCompleted: false,
    }

    if (e.keyCode === KEY_CODE_ENTER) {
      todoListData = [...todoListData, newTodo];
      todoList.setState(todoListData);
      todoCount.render(todoListData);
      e.target.value = '';
    }
  }

  this.toggleTodo = function(index) {
    const newTodos = todoListData.map((todo, todoIndex) => {
      if (index === todoIndex) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    todoListData = newTodos;
    todoList.setState(newTodos);
    todoCount.render(newTodos);
  }

  this.deleteTodo = function(index) {
    const newTodos = todoListData.filter((_todo, todoIndex) => (todoIndex !== index));
    todoListData = newTodos
    todoList.setState(newTodos);
    todoCount.render(newTodos);
  }

  const todoList = new TodoList('#todo-list', todoListData, this.toggleTodo, this.deleteTodo);
  const todoCount = new TodoCount('#todo-count', todoListData);
  const todoInput = new TodoInput('#todo-input', this.addTodo);
}  

export default App;