import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';

function App() {
  const root = document.getElementById('root');

  const divInput = document.createElement('div');
  const divList = document.createElement('div');
  const divCount = document.createElement('div');

  root.appendChild(divInput);
  root.appendChild(divList);
  root.appendChild(divCount);

  divInput.addEventListener('removeAll', (event) => {
    data.length = 0;
    todoList.setState(data);
  });

  const storage = localStorage.getItem('data');
  const data = storage ? JSON.parse(storage) : [];

  const onSubmit = ({ id, text, isCompleted }) => {
    data.push({ id, text, isCompleted });
    todoList.setState(data);
  };

  const todoCount = new TodoCount(divCount);

  const onChange = (newData) => {
    const totalLength = newData.length;
    const completeLength = newData.reduce((prev, curr) => {
      return curr.isCompleted ? prev + 1 : prev;
    }, 0);

    todoCount.setState({ totalLength, completeLength });

    localStorage.setItem('data', JSON.stringify(newData));
  };
  onChange(data);

  const todoInput = new TodoInput(divInput, onSubmit);
  const todoList = new TodoList(divList, data, onChange);
}

App();
