import TodoList  from './TodoList.js'
import TodoForm from './TodoForm.js';
import TodoCount from './TodoCount.js';
import TodoToolBar from './TodoToolBar.js';
import TodoApp from './TodoApp.js';

import config from './config.js';

(function() {
  // 요 기본 데이터는 자유롭게 작성하세요.
  const todoApp = new TodoApp({
      todoForm: new TodoForm({
        $target: document.querySelector("#todo-form"),
      }),
      todoList: new TodoList({
        $target: document.querySelector("#todo-list"),
      }),
      todoCount: new TodoCount({
        $target: document.querySelector("#todo-count"),
      }),
      todoToolBar: new TodoToolBar({
      $target: document.querySelector("#todo-tool-bar"),
    }),
      data: []
  });
})();
