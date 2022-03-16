import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount.js";
import { storage } from "./storage.js";

const TODOS_KEY = 'todos';

export default function App({ $target }) {
  this.$target = $target;
  this.state = storage.getItem(TODOS_KEY);

  const todoList = new TodoList({
    $target: this.$target,
    initialState: this.state,
    deleteTodo: (filterIndex) => {
      const newData = this.state.filter((_, index) => index !== filterIndex);
      this.setState(newData);
    },
    toggleTodo: (index) => {
      const newData = [...this.state];
      newData[index].isCompleted = !newData[index].isCompleted;
      this.setState(newData);
    },
  });

  const todoCount = new TodoCount({
    $target: this.$target,
    initialState: {
      todoCount: this.state.length,
      completedCount: this.state.filter(item => item.isCompleted).length,
    }
  });

  const todoInput = new TodoInput({
    $target: this.$target,
    addTodo: (value) => {
      this.setState([
        ...this.state,
        {
          text: value,
          isCompleted: false,
        }
      ]);
    },
  });

  this.$target.addEventListener('removeAll', () => {
    this.setState([]);
  });

  this.setState = function(nextState) {
    storage.setItem(TODOS_KEY, nextState);
    this.state = nextState;
    todoList.setState(nextState);
    todoCount.setState({
      todoCount: nextState.length,
      completedCount: nextState.filter(item => item.isCompleted).length,
    })
  };
};
