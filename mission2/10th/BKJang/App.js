import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import TodoInput from './TodoInput.js';
import { getTargetElement } from './validationUtil.js';
import { getItem, setItem } from './storgeUtil.js';

function App() {
  let todoListData = getItem('todos');

  const todoListElement = getTargetElement('#todo-list');
  const todoCountElement = getTargetElement('#todo-count');
  const todoInputElement = getTargetElement('#todo-input');
  const removeAllTodoBtn = getTargetElement('#remove-all-todo-btn');

  this.addTodo = newTodo => {
    const newTodos = [...todoListData, newTodo];

    this.updateTodos(newTodos);
  }

  this.toggleTodo = index => {
    const newTodos = todoListData.map((todo, todoIndex) => {
      if (index === todoIndex) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    this.updateTodos(newTodos);
  }

  this.deleteTodo = index => {
    const newTodos = todoListData.filter((_todo, todoIndex) => (todoIndex !== index));
    this.updateTodos(newTodos);
  }

  this.removeAllTodos = () => {
    this.updateTodos([]);
  }

  this.updateTodos = (newTodos = []) => {
    todoListData = newTodos;
    setItem('todos', newTodos)
    this.todoList.setState(newTodos);
    this.todoCount.render(newTodos);
  }

  const removeAllEvent = new CustomEvent('removeAll');
  removeAllTodoBtn.addEventListener('click', function(e) {
    todoListElement.dispatchEvent(removeAllEvent);
  });

  todoListElement.addEventListener('removeAll', this.removeAllTodos)

  this.todoList = new TodoList(todoListElement, todoListData, this.toggleTodo, this.deleteTodo);
  this.todoCount = new TodoCount(todoCountElement, todoListData);
  this.todoInput = new TodoInput(todoInputElement, this.addTodo);
}  

export default App;
