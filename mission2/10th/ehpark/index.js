import TodoApp from './component/TodoApp.js'

(function(){
  const todoApp = new TodoApp({
    $target: document.querySelector('#App'),
    title:'App todo title1',
    TODOS_KEY: 'App todos LS',
  })
  const todoApp2 = new TodoApp({
    $target: document.querySelector('#App2'),
    title:'App todo title2',
    TODOS_KEY: 'App2 todos LS',
  })
})()