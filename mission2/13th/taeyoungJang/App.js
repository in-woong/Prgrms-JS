import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';
import {
  isValidConstructor,
  isValidParameter,
  isValidTarget,
} from './utils.js';
import storage from './storage.js';

const TODOS_STORAGE_KEY = 'todos';

function App({ $target, initialState }) {
  isValidTarget($target);
  isValidConstructor.call(this, App);
  isValidParameter(initialState);

  this.$target = $target;
  this.state = initialState;

  this.$todoList = document.createElement('div');
  this.$form = document.createElement('form');
  this.$todoCount = document.createElement('div');

  this.todoCount = new TodoCount({
    $target: this.$todoCount,
    initalState: this.state,
  });

  this.todoList = new TodoList({
    $target: this.$todoList,
    initialState: this.state,
    onClickTodo: (e) => {
      const selectedIdx = +e.target.dataset.index;
      const formattedList = this.state.map((todo, idx) =>
        selectedIdx === idx
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      );
      this.setState(formattedList);
    },
    onDeleteTodo: (e) => {
      const selectedIdx = +e.target.parentNode.dataset.index;
      const filteredList = this.state.filter(
        (todo, idx) => selectedIdx !== idx
      );
      this.setState(filteredList);
    },
  });

  this.todoInput = new TodoInput({
    $target: this.$form,
    onAddTodo: (text) => {
      const newTodo = {
        text,
        isCompleted: false,
      };

      const newState = [...this.state, newTodo];
      this.setState(newState);
    },
  });

  this.setState = function (newState) {
    isValidParameter(newState);
    storage.setItem({
      storageKeyName: TODOS_STORAGE_KEY,
      newState,
    });

    this.state = newState;

    this.todoList.setState(newState);
    this.todoCount.setState(newState);
  };

  this.onRemoveAll = function () {
    this.setState([]);
  };

  this.$target.addEventListener('removeAll', this.onRemoveAll.bind(this));

  this.render = function () {
    this.$target.appendChild(this.$form);
    this.$target.appendChild(this.$todoList);
    this.$target.appendChild(this.$todoCount);
  };

  this.render();
}

export default App;
