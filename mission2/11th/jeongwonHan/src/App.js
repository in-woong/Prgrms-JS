import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';

const initialState = [
  {
    id: 1,
    text: 'JS 공부하기',
    isCompleted: true,
  },
  { id: 2, text: 'JS 복습하기', isCompleted: false },
];

function App($target) {
  this.$target = $target;
  this.$state = [...initialState];
  this.$nextId = 3;
  this.todoInput = new TodoInput(this.$target, (todoText) => {
    const newData = [
      ...this.$state,
      {
        id: this.$nextId,
        text: todoText,
        isCompleted: false,
      },
    ];
    this.nextId += 1;
    this.setState(newData);
  });
  this.todoList = new TodoList(this.$target, this.$state, (selectId) => {
    const newData = this.$state.map((todo) =>
      todo.id === selectId
        ? {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        : todo
    );
    console.log(newData);
    this.setState(newData);
  });

  this.setState = (nextState) => {
    this.$state = nextState;
    this.todoList.setState(this.$state);
  };
}

export default App;
