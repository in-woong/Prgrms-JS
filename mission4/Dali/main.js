import HttpErrorHandler from './src/utils/HttpErrorHandler.js'
import TodoList from './src/components/TodoList.js';
import TodoForm from './src/components/TodoForm.js';
import TodoApp from './src/components/TodoApp.js';
import Spinner from './src/components/Spinner.js';
import { qs } from './src/utils/dom.js'


;(async function() {
  try {
    const username = 'dali';
    new TodoApp({
      $target: qs('#app'),
      username,
      todoList: new TodoList({
        $target: qs('#todo-list'),
      }),
      todoForm: new TodoForm({
        $target: qs('#todo-form')
      }),
      spinner: new Spinner({
        $target: qs('#spinner')
      })
    })
  }
  catch (e) {
    HttpErrorHandler(e);
  }
})();
