import { data, csTodoData, jsTodoData, nextData } from './data.js';
import TodoList from './components/TodoList.js';
import ErrorModal from './components/ErrorModal.js';

try {
  const todoList = new TodoList('todo-default-wrapper', data);
  const csTodoList = new TodoList('todo-cs-wrapper', csTodoData);
  const jsTodoList = new TodoList('todo-js-wrapper', jsTodoData);
  setTimeout(() => {
    todoList.setState(nextData);
  }, 3000);
} catch (error) {
  const ErrorPopup = new ErrorModal(error);
  ErrorPopup.render();
}
