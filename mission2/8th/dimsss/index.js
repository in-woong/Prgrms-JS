import App from './components/App.js';
import TodoList from './components/TodoList.js.js';
import TodoCount from './components/TodoCount.js';
import TodoInput from './components/TodoInput.js';
import TodoRemoveAllButton from './components/TodoRemoveButton.js';

import TodoLocalStorage from './storage.js';

(() => {
  const todoListElementId = 'todo-list';
  const todoCountElementId = 'todo-count';
  const todoInputElementId = 'todo-input';
  const todoRemoveAllButtonElementId = 'todo-removeall-button';

  const todoInputElementEventName = 'keydown';
  const todoRemoveAllButtonEventName = 'click';

  const todoDataStorage = new TodoLocalStorage();
  
  todoDataStorage.init();

  const app = new App(
    {
      todoList: new TodoList(todoListElementId, todoDataStorage.todoGetItem('todos')),
      todoCount: new TodoCount(todoCountElementId),
      todoInput: new TodoInput(todoInputElementId, todoInputElementEventName),
      todoRemoveAllButton: new TodoRemoveAllButton(todoRemoveAllButtonElementId, todoRemoveAllButtonEventName),
    }, 
    todoDataStorage,
  );

  app.init(app);

})();
