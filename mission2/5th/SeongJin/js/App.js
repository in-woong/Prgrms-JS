import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import errorCheck from "./errorCheck.js";

export default function App() {
  this.$todoList = document.getElementById("todo-list");
  this.$removeAllButton = document.getElementById("remove-btn");

  this.init = () => {
    this.getLocalStorage();

    this.todoInput = new TodoInput(this.addTodo);
    this.todoList = new TodoList(this.todos, this.toggleTodo, this.removeTodo);
    this.todoCount = new TodoCount(this.getTotalCount, this.getCompletedCount);

    this.render = () => {
      this.todoList.setState(this.todos);
      this.todoCount.setState(this.todos);
    };
  };

  this.getLocalStorage = () => {
    try {
      const todoData = localStorage.getItem("todos");
      this.todos = errorCheck.isNotArray(JSON.parse(todoData));
    } catch (e) {
      this.todos = [];
    }
  };

  this.setLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  };

  this.toggleTodo = clickedIndex => {
    this.todos[clickedIndex] = {
      ...this.todos[clickedIndex],
      isCompleted: !this.todos[clickedIndex].isCompleted
    };
    this.setLocalStorage();
    this.render();
  };

  this.removeTodo = clickedIndex => {
    this.todos.splice(clickedIndex, 1);
    this.setLocalStorage();
    this.render();
  };

  this.addTodo = newTodo => {
    this.todos.push(newTodo);
    this.setLocalStorage();
    this.render();
  };

  this.removeAllTodo = () => {
    this.todos = [];
    localStorage.removeItem("todos");
    this.render();
  };

  this.getTotalCount = () => {
    return this.todos.length;
  };

  this.getCompletedCount = () => {
    return this.todos.filter(todo => todo.isCompleted).length;
  };

  this.$todoList.addEventListener("removeAll", this.removeAllTodo);

  this.$removeAllButton.addEventListener("click", () => {
    const removeAllEvent = new CustomEvent("removeAll");
    this.todoList.$todoList.dispatchEvent(removeAllEvent);
    this.todoCount.render();
  });

  this.init();
  this.render();
}
