
import TodoAPI from '../api/index.js';
import { qs, showEl, hideEl } from '../utils/dom.js';
import { handleRequest } from '../utils/requestHelper.js';
function TodoApp ({$target, todoList, todoForm,  username, spinner}) {
  let data = [];
  let loading = false;
  const $todoAppBody = qs('.todo-app-body', $target);

  const showBody = () => showEl($todoAppBody);
  const hideBody = () => hideEl($todoAppBody);



  this.fetchData = async function () {
      return await TodoAPI.fetchData(username);
  };
  this.setState = function(nextData) {
    data = nextData;
    this.render(data);
  };
  this.render = function(data) {
    todoList.render(data);
  };
  this.syncToModel = async function () {
    const todoData = await TodoAPI.fetchData(username);
    this.setState(todoData);
  };
  this.removeTodo = async function (id) {
    await TodoAPI.deleteTodo(username, id);
    this.syncToModel();
  };
  this.toggleTodoUpdate = async function (id) {
    await TodoAPI.toggleTodoComplete(username, id);
    this.syncToModel();
  };
  this.addTodo = async function (todoValue) {
    const todoText = todoValue.trim();
    if(todoText.length){
      await TodoAPI.addTodo(username, todoText);
      this.syncToModel();
    }
  }
  const handleLoading = () => {
      hideBody();
      this.showSpinner();
  };
  const finishLoading = () => {
    showBody();
    this.hideSpinner();
  };
  this.showSpinner = function () {
    loading = true;
    spinner.render(loading)
  };
  this.hideSpinner = function () {
    loading = false;
    spinner.render(loading)
  };
  this.init = async function () {

    const users = await TodoAPI.getUsersTodo();
    console.log('users', users);
    // makeTab
    //

    handleRequest({
      beforeRequest: handleLoading,
      finishRequest: finishLoading,
      request: () => this.syncToModel()
    });


    // props
    // passProps TodoList

    todoList.setProps({
      onRemove: (id) => this.removeTodo(id),
      onToggleTodoUpdate: (id) => this.toggleTodoUpdate(id),
    });

    // passProps TodoForm
    todoForm.setProps({
      onSubmit: this.addTodo.bind(this)
    })

  }
  this.init();
}
export default TodoApp;
