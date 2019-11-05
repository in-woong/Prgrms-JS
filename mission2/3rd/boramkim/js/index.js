import TodoApp from './TodoApp.js';

(function(){
  const todoApp = new TodoApp({
    title:'첫번째 todo',
    name: 'todo1',
    query: '#todo-box'
  })
  const todoApp2 = new TodoApp({ name: 'todo2', query: '#todo-box2' })
})()