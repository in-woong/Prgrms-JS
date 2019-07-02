
import TodoAPI from '../api/index.js';
import HttpErrorHandler from '../utils/HttpErrorHandler.js';
function TodoApp ({$target, todoList, todoForm,  username}) {
  // $target component 일관성으로  지금은 안 쓰지만 일단 받아봄 :D
  let data = [];
  this.fetchData = async function () {
    const resData = await TodoAPI.fetchData(username);
    console.log('resData', resData);
    if(!resData.isError) return resData.data;
    else {
      HttpErrorHandler(resData);
    }
  };
  this.setState = function(nextData) {
    data = nextData;
    this.render(data);
  };
  this.render = function(data) {
    todoList.render(data);
  };
  this.syncToModel = async function () {
    const {isError, ...resData} = await TodoAPI.fetchData(username);
    if(!isError) this.setState(resData.data);
    else {
      HttpErrorHandler(resData);
    }
  };
  this.removeTodo = async function (id) {
    const res = await TodoAPI.deleteTodo(username, id);
    this.syncToModel();
  };
  this.toggleTodoUpdate = async function (id) {
    const res = await TodoAPI.toggleTodoComplete(username, id);
    this.syncToModel();
  };
  this.addTodo = async function (todoValue) {
    const todoText = todoValue.trim();
    if(todoText.length){
      const res = await TodoAPI.addTodo(username, todoText);
      this.syncToModel();
    }
  }
  this.init = async function () {
    const fetchData = await this.fetchData() || [];
    this.setState(fetchData);

    // props
    todoList.setProps({
      onRemove: this.removeTodo.bind(this),
      onToggleTodoUpdate: this.toggleTodoUpdate.bind(this),
    });
    todoForm.setProps({
      onSubmit: this.addTodo.bind(this)
    })

  }
  this.init();

}
export default TodoApp;
