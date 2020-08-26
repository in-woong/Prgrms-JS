import TodoDomGenerator from './components/TodoDomGenerator.js';
import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';
import { checkDataFormat, renderErrorNotification } from './utils/utils.js';
import { setStorageData, getStorageData } from './utils/data.js';

function App(elementId) {
  // init
  this.elementId = elementId;
  const storageKey = this.elementId.split('-')[0];
  this.todos = getStorageData(storageKey);

  this.init = () => {
    new TodoDomGenerator(this.elementId);
    new TodoList(this.todos, this.elementId);
    new TodoCount(this.todos, this.elementId);
    new TodoInput({
      todoList: this.todos,
      elementId: this.elementId,
      onChange: {
        add: onAdd,
        remove: onRemove,
        toggle: onToggle,
      },
    });
  };

  this.render = () => {
    document
      .querySelector(`#${this.elementId}`)
      .dispatchEvent(new CustomEvent('changeList', { detail: this.todos }));
  };

  this.setState = (newData) => {
    checkDataFormat(newData);
    setStorageData(storageKey, newData);
    this.todos = getStorageData(storageKey);
    this.render();
  };

  // list edit : add
  const onAdd = (addData) => {
    const immutableTodos = this.todos;
    const newArray = [...immutableTodos, addData];
    this.setState(newArray);
  };
  // list edit : remove
  const onRemove = (listIndex) => {
    const immutableTodos = this.todos;
    const newArray = immutableTodos.filter(
      (list) => list.index !== parseInt(listIndex)
    );
    this.setState(newArray);
  };
  // list edit : check
  const onToggle = (listIndex) => {
    const immutableTodos = this.todos;
    const newArray = immutableTodos.map((todo) => {
      if (todo.index === parseInt(listIndex)) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    this.setState(newArray);
  };

  // list eventListener : removeAll
  document
    .querySelector(`#${this.elementId}`)
    .addEventListener('removeAll', () => {
      this.setState([]);
    });

  // data validation
  try {
    if (!(this instanceof App)) {
      throw new Error('error: invalid function App call!');
    }
    checkDataFormat(this.todos);
    this.init();
  } catch (error) {
    renderErrorNotification(error, this.elementId);
  }
}

const todoList = new App('todo-list');
// const wishList = new App('wish-list');
