import { proxyState } from './utils.js';

export default class App {
  constructor($wrapper, props, storageService, todoList, todoInput, todoCount) {
    this.todoList = todoList;
    this.todoInput = todoInput;
    this.todoCount = todoCount;
    this.$wrapper = $wrapper;
    this.state = {
      todoListData: [],
      ...props,
    }

    this.storageService = storageService;
    this.init = this.init.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeAllTodo = this.removeAllTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.init();
  }

  init() {
    this.state = proxyState(this.state, this, {
      todoListData: this.handler.bind(this),
    });
    this.$wrapper.addEventListener('removeAllTodo', this.removeAllTodo);
    this.$wrapper.addEventListener('addTodo', this.addTodo);
    this.$wrapper.addEventListener('toggleTodo', this.toggleTodo);
    this.$wrapper.addEventListener('removeTodo', this.removeTodo);
  }

  handler() {
    this.todoList.setState({todoList: this.state.todoListData});
    this.todoCount.setState(this.filterList());
  }

  filterList() {
    return {
      totalTodo: this.state.todoListData.length,
      completedTodo: this.state.todoListData.filter(elem => elem.isCompleted).length,
    }
  }

  addTodo($event) {
    const { todo } = $event.detail;
    this.setState({
      todoListData: [
        ...this.state.todoListData,
        todo,  
      ],
    });
  }

  removeAllTodo() {
    this.setState({
      todoListData: [],
    });
  }

  removeTodo($event) {
    const { key } = $event.detail;
    this.setState({
      todoListData: this.state.todoListData.filter((elem, idx) => idx !== parseInt(key)),
    });
  }

  toggleTodo($event) {
    const { key } = $event.detail;
    this.setState({
      todoListData: this.state.todoListData.map((elem, idx) => {
        if (idx === parseInt(key)) {
          elem.isCompleted = !elem.isCompleted;
        }
        return elem;
      })
    });
  }

  setState(data) {
    Object.keys(data).forEach(key => {
      this.state[key] = data[key];
    });
    this.storageService.set('todo-app', this.state);
    this.render();
  };

  render() {
  }
}