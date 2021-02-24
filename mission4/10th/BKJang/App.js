import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import TodoInput from './TodoInput.js';
import { getTargetElement } from './validationUtil.js';
import { getTodos, addTodo, deleteTodo, deleteTodos, toggleTodo } from './api.js';

function App() {
  const todoListElement = getTargetElement('#todo-list');
  const todoCountElement = getTargetElement('#todo-count');
  const todoInputElement = getTargetElement('#todo-input');
  const removeAllTodoBtn = getTargetElement('#remove-all-todo-btn');
  this.todoListData = [];

  this.setTodoListData = async () => {
    const initialTodos = await getTodos('BKJang');
    this.todoListData = initialTodos;
    this.updateTodos(initialTodos);
  }

  this.addTodo = async newTodo => {
    const response = await addTodo('BKJang', newTodo);
    this.todoListData = [...this.todoListData, response];
    this.updateTodos(this.todoListData);
  }

  this.toggleTodo = async todoId => {
    await toggleTodo('BKJang', todoId);
    const newTodos = this.todoListData.map(todo => {
      if (todoId === todo._id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    console.log(newTodos)

    this.updateTodos(newTodos);
  }

  this.deleteTodo = async todoId => {
    await deleteTodo('BKJang', todoId);
    const newTodos = this.todoListData.filter(todo => todo._id !== todoId);
    this.updateTodos(newTodos);
  }

  this.removeAllTodos = async () => {
    await deleteTodos('BKJang');
    this.updateTodos([]);
  }

  this.updateTodos = (newTodos = []) => {
    this.todoListData = newTodos;
    this.todoList.setState(newTodos);
    this.todoCount.render(newTodos);
  }

  const removeAllEvent = new CustomEvent('removeAll');
  removeAllTodoBtn.addEventListener('click', function(e) {
    todoListElement.dispatchEvent(removeAllEvent);
  });

  todoListElement.addEventListener('removeAll', this.removeAllTodos)

  this.todoList = new TodoList(todoListElement, this.todoListData, this.toggleTodo, this.deleteTodo);
  this.todoCount = new TodoCount(todoCountElement, this.todoListData);
  this.todoInput = new TodoInput(todoInputElement, this.addTodo);

  this.setTodoListData()
}  

export default App;
