import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
// import LocalStorage from './LocalStorage.js'
import * as api from './api.js'
import UserList from './userList.js'


export default function App(){
  this.isValid = () => {
    if(this.data === null || this.data === undefined) {
      throw new Error('data가 null 혹은 undefinded입니다.');
    }
    if(!Array.isArray(this.data)) {
        throw new Error('data가 Array가 아닙니다.');
    }
    if(!this.data.every(d=>typeof d.text === 'string' && typeof d.isCompleted === 'boolean')) {
        throw new Error('data의 타입이 적절하지않습니다.');
    }
  }

  this.state = {
    todos: [],
    users: [],
    selectedUser: '',
    selectedIdx: ''
  };

  this.settingTodos = (userIdx) => {
    this.state.selectedUser = this.state.users[userIdx];
    this.fetchTodos();

    document.getElementById('user-name').style.display = 'block';
    document.getElementById('user-name').innerHTML = this.state.selectedUser + '의 Todo List';
    document.getElementById('show-btn').style.display = 'block';
    document.getElementById('user-list').style.display = 'none';
    document.getElementById('todo-list').style.display = 'block';
  }

  this.fetchTodos = async () => {
    const todos = await api.getTodo(this.state.selectedUser);
    this.setState(todos);
  }

  this.fetchUsers = async () => {
    const users = await api.getUser();
    this.state.users = users;
    this.userList = new UserList(this.state.users, $userTarget, $btn, this.settingTodos);
  }

  this.toggleTodo = async (idx) => {
    const todoId = this.state.todos[idx]._id;
    await api.toggleTodo(todoId, this.state.selectedUser);
    this.fetchTodos();
  }

  this.deleteTodo = async (idx) => {
    const todoId = this.state.todos[idx]._id;
    await api.deleteTodo(todoId, this.state.selectedUser);
    this.fetchTodos();
  }  

  this.deleteAllTodo = async (idx) => {
    await api.deleteTodo('all', this.state.selectedUser);
    this.fetchTodos();
  }

  this.addTodo = async (todo) => {
    await api.saveTodo(todo, this.state.selectedUser);
    this.fetchTodos();
  }

  this.countTodo = () => {
    const completeTodo = this.state.todos.filter((item)=>item.isCompleted);
    const countTodoObj = {
      completeTodo: completeTodo.length,
      incompleteTodo : this.state.todos.length - completeTodo.length
    }
    return countTodoObj;
  }

  this.render = () => {
    this.todoList.setState(this.state.todos);
    this.todoCount.render();
    // this.localStorage.setData(this.data);
  }

  this.setState = (newState) => {
    this.state.todos = newState;
    this.render();
  }

  // this.fetchTodos();
  this.fetchUsers();
  const $target = document.querySelector('#todo-list');
  const $userTarget = document.querySelector('#user-list');
  const $btn = document.querySelector('#show-btn');
  //this.localStorage = new LocalStorage();
  //this.data = this.localStorage.getData();
  this.todoList = new TodoList(this.state.todos, $target, this.isValid, this.toggleTodo, this.deleteTodo);
  this.todoInput = new TodoInput($target, this.addTodo, this.deleteAllTodo);
  this.todoCount = new TodoCount($target, this.countTodo);

  
}

