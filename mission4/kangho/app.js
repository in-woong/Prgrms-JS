import { proxyState } from './utils.js';

export default class App {

  constructor($wrapper, apiService, todoList, todoInput, todoCount, todoUsers) {
    this.$wrapper = $wrapper;
    this.todoList = todoList;
    this.todoInput = todoInput;
    this.todoCount = todoCount;
    this.$wrapper = $wrapper;
    this.apiService = apiService;
    this.todoUsers = todoUsers;
    this.state = {
      todoListData: [],
      users: [],
      currentUser: 'kangho',
    }

    this.init = this.init.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.render = this.render.bind(this);

    this.init();
  }

  async init() {
    this.$wrapper.addEventListener('addTodo', this.addTodo);
    this.$wrapper.addEventListener('toggleTodo', this.toggleTodo);
    this.$wrapper.addEventListener('removeTodo', this.removeTodo);
    this.$wrapper.addEventListener('click-user', this.setCurrentUser);

    const todoListData = await this.fetchTodoList(this.state.currentUser);
    const users = await this.fetchUsers();
    this.setState({
      users,
      todoListData,
    });
  }

  async fetchTodoList(user = this.state.currentUser) {
    try {
      const ret = await this.apiService.httpGet(`/${user}`);
      return ret;
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
        `/${this.state.currentUser}/${id}`,
        {},
      );
    } catch(e) {

    }
  }

  async toggleTodoItem(id) {
    try {
      const ret = await this.apiService.httpPut(
        `/${this.state.currentUser}/${id}/toggle`,
        {},
      );
      return ret;
    } catch(e) {

    }
  }

  async fetchUsers() {
    try {
      const ret = await this.apiService.httpGet(
        '/users',
      );
      return ret;
    } catch(e) {

    }
  }

  handler() {
    this.todoList.setState({todoList: this.state.todoListData});
    this.todoCount.setState(this.filterList());
    this.todoUsers.setState({
      users: this.state.users,
      currentUser: this.state.currentUser,
    });
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

  async setCurrentUser($event) {
    const { user } = $event.detail;
    const todoListData = await this.fetchTodoList(user);
    this.setState({
      currentUser: user,
      todoListData,
    });
  }

  setState(data) {
    Object.keys(data).forEach(key => {
      this.state[key] = data[key];
    });
    this.handler();
    this.render();
  };

  render() {
  }
}