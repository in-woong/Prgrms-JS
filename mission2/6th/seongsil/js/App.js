import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';

const App = function() {
  this.todoData = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ];

  const updateState = (newData) => {
    this.todoData = newData;
    this.todoList.setState(this.todoData);
  };

  const $target = document.querySelector('#App');

  this.todoList = new TodoList($target, this.todoData);
  this.todoInput = new TodoInput($target, this.todoData, {
    onAddTodoItem: (newTodoText) => {
      const newData = this.todoData;
      newData.push({
        text: newTodoText,
        isCompleted: false,
      });
      updateState(newData);
    }
  });
};

export default App;
