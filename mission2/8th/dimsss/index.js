import App from './components/App.js';
import TodoList from './components/TodoList.js';
import TodoCount from './components/TodoCount.js';
import TodoInput from './components/TodoInput.js';
import TodoRemoveAllButton from './components/TodoRemoveButton.js';

const todoListElementId = 'todo-list';
const todoCountElementId = 'todo-count';
const todoInputElementId = 'todo-input';
const todoRemoveAllButtonElementId = 'todo-removeall-button';

const todoInputElementEventName = 'keydown';
const todoRemoveAllButtonEventName = 'click';

(() => {

  new App();

  new TodoList(todoListElementId);
  new TodoCount(todoCountElementId);
  new TodoInput(todoInputElementId, todoInputElementEventName);
  new TodoRemoveAllButton(todoRemoveAllButtonElementId, todoRemoveAllButtonEventName);

})();
