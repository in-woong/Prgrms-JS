import TodoList from '../components/TodoList.js';
import TodoInput from '../components/TodoInput.js';
import TodoCount from '../components/TodoCount.js';

export default class TodoApp {
  constructor(data) {
    this.data = data;
    this.inputValue = '';
    this.appEl = document.getElementById('todo-app');
    this.todoInput = new TodoInput(this.appEl, this.inputValue, this.handleInputChange, this.handleInputKeyup, this.handleRemoveTodo);
    this.todoList = new TodoList(this.appEl, this.data, this.handleToggleCompleted, this.handleRemoveTodoItem);
    this.todoCount = new TodoCount(this.appEl, this.data.length);
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    this.inputValue = value;
    this.todoInput.setState(value);
  }
  handleInputKeyup = (event) => {
    const { keyCode } = event;
    const enterKeyCode = 13;
    if (keyCode === enterKeyCode) {
      this.handleAddTodoItem();
      this.inputValue = '';
      this.todoInput.setState(this.inputValue);
    }
  }
  handleAddTodoItem = () => {
    const maxId = this.data.length > 0 && this.data.map(item => item.id).reduce((acc, cur) => Math.max(acc, cur));
    const nextId = maxId ? maxId + 1 : 1;
    console.log(nextId)
    this.data = this.data.concat({ id: nextId, text: this.inputValue, isCompleted: false });
    this.todoList.setState(this.data);
    this.todoCount.setState(this.data.length);
  }
  handleToggleCompleted = (event) => {
    if (event.target.nodeName !== 'BUTTON') {
      const id = Number(event.target.closest('li').dataset.id);
      const nextData = this.data.map(item => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted }
        }
        return item;
      });
      this.data = nextData;
      this.todoList.setState(this.data);
    }
  }
  handleRemoveTodoItem = (event) => {
    const id = Number(event.target.closest('li').dataset.id);
    const nextData = this.data.filter(item => item.id !== id);
    this.data = nextData;
    this.todoList.setState(this.data);
    this.todoCount.setState(this.data.length);
  }

  render() {
    this.appEl.innerHTML = '';
  }
}