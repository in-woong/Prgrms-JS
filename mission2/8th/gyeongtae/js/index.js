import App from './App.js'

const app = new App(
  window.localStorage.getItem('todoList'),
  document.querySelector('#app')
)
