import App from './Components/App.js';
import TodoList from './Components/TodoList.js';
import TodoCount from './Components/TodoCount.js';
import TodoInput from './Components/TodoInput.js';
import TodoRemoveAllButton from './Components/TodoRemoveButton.js';

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
