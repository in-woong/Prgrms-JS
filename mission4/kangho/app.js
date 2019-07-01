import { proxyState } from './utils.js';

export default class App {

  constructor($wrapper, apiService, todoList, todoInput, todoCount) {
    this.todoList = todoList;
    this.todoInput = todoInput;
    this.todoCount = todoCount;
    this.$wrapper = $wrapper;
    this.apiService = apiService;
    this.state = {
      todoListData: [],
    }

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

    this.fetchTodoList();

    this.$wrapper.addEventListener('removeAllTodo', this.removeAllTodo);
    this.$wrapper.addEventListener('addTodo', this.addTodo);
    this.$wrapper.addEventListener('toggleTodo', this.toggleTodo);
    this.$wrapper.addEventListener('removeTodo', this.removeTodo);
  }

  async fetchTodoList() {
    try {
      const ret = await this.apiService.httpGet('/kangho');
      this.setState({
        todoListData: ret
      });
    } catch(e) {
    }
  }

  async postTodo(todo) {
    try {
      const ret = await this.apiService.httpPost(
        '/kangho',
        todo,
      );
    } catch(e) {
    }
  }

  async deleteTodo(id) {
    try  {
      const ret = await this.apiService.httpDelete(
        `/kangho/${id}`,
        {},
      );
    } catch(e) {

    }
  }

  async toggleTodoItem(id) {
    try {
      const ret = await this.apiService.httpPut(
        `/kangho/${id}/toggle`,
        {},
      );
    } catch(e) {

    }
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

  async addTodo($event) {
    const { todo } = $event.detail;
    await this.postTodo(todo);
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

  async removeTodo($event) {
    const { key } = $event.detail;
    await this.deleteTodo(key);
    this.setState({
      todoListData: this.state.todoListData.filter(todoItem => todoItem._id !== key),
    });
  }

  async toggleTodo($event) {
    const { key } = $event.detail;
    await this.toggleTodoItem(key);
    this.setState({
      todoListData: this.state.todoListData.map((todoItem) => {
        if (todoItem._id === key) {
          todoItem.isCompleted = !todoItem.isCompleted;
        }
        return todoItem;
      })
    });
  }

  setState(data) {
    Object.keys(data).forEach(key => {
      this.state[key] = data[key];
    });
    this.render();
  };

  render() {
  }
}