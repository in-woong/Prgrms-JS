import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';

function App() {
  this.state = JSON.parse(localStorage.getItem('todos')) || [];

  const todoInputContainer = document.querySelector('#todoInputContainer');
  const todoListContainer = document.querySelector('#todoListContainer');
  const todoCountContainer = document.querySelector('#todoCountContainer');

  const todoList = new TodoList({
    initialState: this.state,
    todoListContainer,
    onRemove: (index) => {
      this.state.splice(index, 1);
      this.setState(this.state);
    },
    onChange: (index) => {
      this.state[index].isCompleted = !this.state[index].isCompleted;
      this.setState(this.state);
    },
  });
  const todoInput = new TodoInput({
    todoInputContainer,
    onCreate: (data) => {
      this.state.push(data);
      this.setState(this.state);
    },
    removeAll: () => {
      this.state = [];
      this.setState(this.state);
    },
  });
  const todoCount = new TodoCount(todoCountContainer, this.state);

  this.setState = function (state) {
    localStorage.setItem('todos', JSON.stringify(state));
    todoList.setState(state);
    todoCount.setCount(state);
  };
}

export default App;
