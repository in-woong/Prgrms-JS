import TodoList from './TodoList.js';

export default function App() {
  const data = [
    {
      text: 'JS',
      isCompleted: true,
    },
    {
      text: 'TS',
      isCompleted: false,
    },
  ];

  const $todoList = document.querySelector('#todo-list');
  const todoList = new TodoList(data, $todoList, this);

  this.addTodo = (text) => {
    data.push({ text, isCompleted: false });
    todoList.setState(data);
  };

  this.deleteTodo = (index) => {
    data.splice(index, 1);
    todoList.setState(data);
  };

  this.completeTodo = (index) => {
    data[index].isCompleted = !data[index].isCompleted;
    todoList.setState(data);
  };
}
