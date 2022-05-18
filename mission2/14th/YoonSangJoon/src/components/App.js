import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';

import { setStorage, getStorage } from '../utils/index.js';

export default function App() {
  this.state = getStorage('todoList');
  this.setState = (nextState) => {
    this.state = nextState;
    setStorage('todoList', this.state);
    todoList.setState(this.state);
    todoCount.setState(this.state);
  };

  const todoInput = new TodoInput({
    addTodoState: (newTodo) => this.setState([...this.state, newTodo]),
    removeAllState: () => this.setState([]),
  });

  const todoList = new TodoList({
    initialState: this.state,
    setGlobalState: this.setState,
  });

  const todoCount = new TodoCount({
    initialState: this.state,
  });
}
