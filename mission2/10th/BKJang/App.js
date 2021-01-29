import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import TodoInput from './TodoInput.js';
import { KEY_CODE_ENTER } from './constants.js';
import { getTargetElement } from './validationUtil.js';

function App() {
  let todoListData = [];

  const todoListElement = getTargetElement('#todo-list');
  const todoCountElement = getTargetElement('#todo-count');
  const todoInputElement = getTargetElement('#todo-input');
  const removeAllTodoBtn = getTargetElement('#remove-all-todo-btn');

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

  this.removeAllTodos = () => {
    todoListData = [];
    todoList.setState([]);
    todoCount.render([]);
  }

  const removeAllEvent = new CustomEvent('removeAll');
  removeAllTodoBtn.addEventListener('click', (e) => {
    todoListElement.dispatchEvent(removeAllEvent);
  });

  todoListElement.addEventListener('removeAll', () => {
    this.removeAllTodos();
  })

  const todoList = new TodoList(todoListElement, todoListData, this.toggleTodo, this.deleteTodo);
  const todoCount = new TodoCount(todoCountElement, todoListData);
  const todoInput = new TodoInput(todoInputElement, this.addTodo);
}  

export default App;