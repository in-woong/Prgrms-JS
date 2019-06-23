import { getLocalStorage, saveLocalStorage } from "./localStorage.js";
import coding from './config.js'
import TODO from './TODO.js';

const TODOS_KEY = 'TODOS_KEY';

export default class TodoApp {
  constructor({todoForm, todoList, todoCount, todoToolBar, data}){
    // component
    this.todoForm = todoForm;
    this.todoList = todoList;
    this.todoCount = todoCount;
    this.todoToolBar = todoToolBar;
    //
    this.data = data;
    // data
    this.init(data);
    this.setState(this.data);
  }
  setState(data) {
    this.data = data;
    saveLocalStorage(TODOS_KEY, this.data);
    this.render();
  }
  init(data){
    this.fetchData(data);
    // add
    this.todoForm.bindAddTodo = this.addTodo.bind(this);
    // remove
    this.todoList.bindRemoveTodo = this.removeTodo.bind(this);
    // updateComplete
    this.todoList.bindToggleTodoUpdate = this.toggleTodoUpdate.bind(this);
    //removeAll
    this.todoToolBar.bindRemoveAllTodo = this.handleRemoveAll.bind(this);
  }
  fetchData(data){
    const todos = getLocalStorage(TODOS_KEY) || coding.data;
    this.data = todos.concat(this.data)
  }
  handleRemoveAll(){
    this.setState([]);
  }
  render(){
    this.todoList.render(this.data);
    this.todoCount.render({
      todoCount: this.data.length,
      completedCount: this.getCompletedCount(),
    });
  }
  getCompletedCount() {
    return this.data.filter(todo=>todo.isCompleted).length;
  }
  removeTodo(deletedID){
    const removedTodo = [...this.data].filter(({id}) => id !== Number(deletedID));
    this.setState(removedTodo);
  }
  toggleTodoUpdate(updatedID){
    const updatedTodo = [...this.data];
    const todo = updatedTodo.find(({id}) => id === Number(updatedID));
    todo.isCompleted = !todo.isCompleted;
    this.setState(updatedTodo);
  }
  addTodo(todoText){
    this.setState([...this.data, new TODO(todoText)])
  }
}
