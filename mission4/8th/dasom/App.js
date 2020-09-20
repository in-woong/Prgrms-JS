import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
// import LocalStorage from './LocalStorage.js'
import * as api from './api.js'


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
    todos: []
  };

  this.fetchTodos = async () => {
    const todos = await api.getTodo();
    this.setState({
      ...this.setState,
      todos
    })
  }

  this.toggleTodo = async (idx) => {
    const todoId = this.state.todos[idx]._id;
    await api.toggleTodo(todoId);
    this.fetchTodos();
  }

  this.deleteTodo = async (idx) => {
    const todoId = this.state.todos[idx]._id;
    await api.deleteTodo(todoId);
    this.fetchTodos();
  }  

  this.deleteAllTodo = async (idx) => {
    await api.deleteTodo('all');
    this.fetchTodos();
  }

  this.addTodo = async (todo) => {
    await api.saveTodo(todo);
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
    this.state = newState;
    this.render();
  }

  this.fetchTodos();
  const $target = document.querySelector('#todo-list');
  //this.localStorage = new LocalStorage();
  //this.data = this.localStorage.getData();
  this.todoList = new TodoList(this.state.todos, $target, this.isValid, this.toggleTodo, this.deleteTodo);
  this.todoInput = new TodoInput($target, this.addTodo, this.deleteAllTodo);
  this.todoCount = new TodoCount($target, this.countTodo);
  
}

