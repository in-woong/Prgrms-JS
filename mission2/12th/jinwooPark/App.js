import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';

class App {
  $target
  state
  constructor() {
    this.$target = document.querySelector('#app');
    this.$target.innerHTML += this.template();

    this.setup();
    window.addEventListener('remove-all-todos', () => {
      this.setState({todo:[]});
    })
    this.render();

  }

  setState(state) {
    this.state = {...this.state, ...state}
    this.render();
  }

  mount(){
    const {addTodo, deleteTodo, todoCount, completeTodo, completedTodoCount} = this;
    const $todoInput = document.querySelector('.todo-input-component');
    const $todoList = document.querySelector('.todo-list-component');
    const $todoCount = document.querySelector('.todo-count-component');

    new TodoInput($todoInput, {addTodo: addTodo.bind(this)});
    new TodoList($todoList, {todoList: [...this.state.todo], deleteTodo: deleteTodo.bind(this), completeTodo: completeTodo.bind(this)});
    new TodoCount($todoCount, {todoCount: todoCount, completedTodoCount: completedTodoCount})
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mount();
  }

  template() {
    return `
      <div class='todo-input-component'></div>
      <div class='todo-list-component'></div>
      <div class='todo-count-component'></div>`

  }

  setup() {
    //typecheck 및 데이터 유효성 검증 나중에 추가 ㅜ
    const todoList = JSON.parse(window.localStorage.getItem('todoList'));
    this.state = {
      todo: todoList ?? [],
    }
  }

  setTodoInLocalStorage() {
    window.localStorage.setItem('todoList', JSON.stringify(this.state.todo));
  }

  get todoCount() {
    return this.state.todo.length;
  }

  get completedTodoCount() {
    return this.state.todo.filter(todo => todo.isCompleted).length;
  }

  get guid() {
    function _s4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    return _s4() + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + _s4() + _s4();
  }

  addTodo(todo) {
    this.setState({
      todo: [...this.state.todo, {id: this.guid, text: todo, isCompleted: false}]
    })
    const $input = this.$target.querySelector('.todo-input');

    $input.focus();
    this.setTodoInLocalStorage();
  }

  deleteTodo(id) {
    this.setState({
      todo: this.state.todo.filter((todo) => todo.id !== id)
    })
    this.setTodoInLocalStorage();

  }

  completeTodo(id) {
    this.setState({
      todo: this.state.todo.map((todo) => {
        if(String(todo.id) === id){
          return {id: todo.id, text: todo.text, isCompleted: !todo.isCompleted}
        }
        return todo
      })
    })
    this.setTodoInLocalStorage();
  }
}

new App()
