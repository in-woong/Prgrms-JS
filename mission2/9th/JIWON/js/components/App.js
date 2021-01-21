import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount.js";
import TodoRemoveAll from "./TodoRemoveAll.js";

export default function App() {
  let data = [];

  try {
    data = JSON.parse(localStorage.getItem('todo-list')) || [];
  } catch (error) {
    data = [];
  }
  
  const target = document.querySelector('#todo-list');
  const countView = document.querySelector('#todo-count');
  const removeBtn = document.querySelector("#remove-all-btn");
  
  this.addTodo = (text) => {
    data.push({ text, isCompleted: true });
    todoList.setState(data);
    this.countTodo(data);
  }

  this.completeTodo = (index) => {
    data[index].isCompleted = !data[index].isCompleted;
    todoList.setState(data);
    this.countTodo(data);
  };

  this.deleteTodo = (id) => {
    data.splice(id, 1);
    todoList.setState(data);
    this.countTodo(data);
  };

  this.countTodo = (data) => {
    todoCount.countingTodo(data);
    todoList.setState(data);
  };

  removeBtn.addEventListener('RemoveAll', () => {
    data = [];

    todoList.setState(data);
    this.countTodo(data);
    localStorage.clear();
  });
  
  const todoList = new TodoList(target.id, data, this.deleteTodo, this.completeTodo);
  const todoCount = new TodoCount(countView, data);
  const todoInput = new TodoInput(this.addTodo);
  const todoRemoveAll = new TodoRemoveAll();

  this.countTodo(data);

}
