import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';

const initialState = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

function App($target) {
  this.$target = $target;
  this.$state = [...initialState];
  this.todoInput = new TodoInput(this.$target, (todoText) => {
    const newData = [
      ...this.$state,
      {
        text: todoText,
        isCompleted: false,
      },
    ];
    this.setState(newData);
  });
  this.todoList = new TodoList(this.$target, initialState);

  this.setState = (nextState) => {
    this.$state = nextState;
    this.todoList.setState(this.$state);
  };
}

export default App;
