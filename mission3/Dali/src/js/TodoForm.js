const TODO_INPUT = 'todo-input';

export default class TodoForm {
  constructor({$target}){
    this.$target = $target;
    this.init();
    //bind
    this.bindAddTodo = null;
  }
  init() {
    this.$target.addEventListener('submit', (e)=>{
        e.preventDefault();
        this.handleSubmit(this.$target[TODO_INPUT].value.trim());
    })
  }
  handleSubmit(todoText){
    if(!todoText) return;
     this.addTodo(todoText)
  }
  addTodo(todoText){
    this.bindAddTodo(todoText);
    this.clearTodo();
  }
  clearTodo(){
    this.$target[TODO_INPUT].value = '';
  }
}
