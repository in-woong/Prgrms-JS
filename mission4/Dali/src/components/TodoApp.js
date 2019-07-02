
import TodoAPI from '../api/index.js';
function TodoApp ({$target, todoList, todoForm,  username}) {
  let data = [];
  this.tag = $target;
  // $target component 일관성으로  지금은 안 쓰지만 일단 받아봄 ;;;
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
  this.init = async function () {
    const fetchedData = await this.fetchData() || [];
    this.setState(fetchedData);

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
