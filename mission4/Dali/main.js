import HttpErrorHandler from './src/utils/HttpErrorHandler.js'
import TodoList from './src/components/TodoList.js';
import TodoForm from './src/components/TodoForm.js';
import TodoApp from './src/components/TodoApp.js';
import { qs } from './src/utils/dom.js'


;(async function() {
  try {
    const username = 'dali';
    new TodoApp({
      $target: '#app',
      username,
      todoList: new TodoList({
        $target: qs('#todo-list'),
      }),
      todoForm: new TodoForm({
        $target: qs('#todo-form')
      })
    })
  }
  catch (e) {
    HttpErrorHandler(e);
  }

})();
