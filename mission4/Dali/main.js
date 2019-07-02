import TodoList from './src/components/TodoList.js';
import TodoForm from './src/components/TodoForm.js';
import TodoApp from './src/components/TodoApp.js';
import { qs } from './src/utils/dom.js'
import TodoAPI from './src/api/index.js';

;(async function() {
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

})();
