// import Todo from './Todo.js';

import Observable from './Observable.js'
export default class TodoApp {
  constructor({todoForm, todoList, todoCount, data}){
    // component
    this.todoForm = todoForm;
    this.todoList = todoList;
    this.todoCount = todoCount;
    // data
    this.init();
    this.setState(data);
    this._observable = new Observable();
  }
  setState(data) {
    this.data = data;
    this.render();
  }
  init(){
    // add
    this.todoForm.bindAddTodo = this.addTodo.bind(this);
    // remove
    this.todoList.bindRemoveTodo = this.removeTodo.bind(this);
    // updateComplete
    this.todoList.bindToggleTodoUpdate = this.toggleTodoUpdate.bind(this);

    this.bindSubscribe()
  }
  bindSubscribe(){
    this._observable.subscribe((data)=>this.todoList.setState(data));
    this._observable.subscribe((data)=>this.todoCount.setState(data));
  }
  render(){
   this._observable.fire(this.data)
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
    const newTodo = {
      text: todoText,
      isCompleted: false,
      id: this.data.length
    };
    this.setState([...this.data, newTodo])
  }
}
