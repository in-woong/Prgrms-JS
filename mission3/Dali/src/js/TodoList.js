import  { todoListTemplate }  from './template.js';

const REMOVE_TODO_BTN = 'remove-todo';

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
      this.$target.addEventListener('click', ({target})=>{
          if(target.dataset.id !== REMOVE_TODO_BTN) return;
          const todoId = target.closest('li').dataset.id;
          this.removeTodo(todoId)
    })
  }
  removeTodo(id){
    const removedTodo = [...this.data].filter(todo=>todo.id !== Number(id));
    this.setState(removedTodo);
  }
  render(){
    console.log(this);
    const htmlString = this.data.map(todo => todoListTemplate(todo));
    this.$target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  }
}
