import  { todoListTemplate }  from './template.js';

const REMOVE_TODO_BTN = 'remove-todo';
const TODO_TEXT = 'todo-text';

export default class TodoList {
  constructor({$target}){
    this.$target = $target;
    this.init();

    // App이랑 묶일 함수들
    this.bindRemoveTodo = null;
    this.bindToggleTodoUpdate = null;
  }
  init() {
      // remove todo event
      this.$target.addEventListener('click', ({ target }) => this.handleRemoveTodo(target));
      // toggle todo event
      this.$target.addEventListener('click', ({ target }) => this.handleUpdateCompletedTodo(target));
  }
  static getTodoIdByListItem(target){
    return target.closest('li').dataset.id;
  }
  handleRemoveTodo(target){
    if(target.dataset.id !== REMOVE_TODO_BTN) return;
    this.removeTodo(TodoList.getTodoIdByListItem(target));
  }
  handleUpdateCompletedTodo(target){
    if (target.dataset.id !== TODO_TEXT) return;
    this.toggleTodoUpdate(TodoList.getTodoIdByListItem(target));
  }
  removeTodo(deletedID){
    this.bindRemoveTodo(deletedID);
  }
  toggleTodoUpdate(updatedID){
    this.bindToggleTodoUpdate(updatedID);
  }
  render(todoList){
    const htmlString = todoList.map(todo => todoListTemplate(todo));
    this.$target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  }
}
