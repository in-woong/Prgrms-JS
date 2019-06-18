import  { todoListTemplate }  from './template.js';

const REMOVE_TODO_BTN = 'remove-todo';
const TODO_TEXT = 'todo-text';

export default class TodoList {
  constructor({$target, data}){
    this.$target = $target;
    this.setState(data);
    this.init();
  }
  setState(data) {
    this.data = data;
    this.render();
  }
  init() {
      // remove todo event
      this.$target.addEventListener('click', ({target})=>{
          if(target.dataset.id !== REMOVE_TODO_BTN) return;
          const todoId = target.closest('li').dataset.id;
          this.removeTodo(todoId)
      });
      // toggle todo event
      this.$target.addEventListener('click', ({target})=> {
        if (target.dataset.id!== TODO_TEXT) return;
        const todoId = target.closest('li').dataset.id;
        this.toggleTodo(todoId)
      })
  }
  removeTodo(deletedID){
    const removedTodo = [...this.data].filter(({id}) => id !== Number(deletedID));
    this.setState(removedTodo);
  }
  toggleTodo(updatedID){
    const updatedTodo = [...this.data];
    const todo = updatedTodo.find(({id}) => id === Number(updatedID));
    todo.isCompleted = !todo.isCompleted;
    this.setState(updatedTodo);
  }
  render(){
    console.log(this);
    const htmlString = this.data.map(todo => todoListTemplate(todo));
    this.$target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  }
}
