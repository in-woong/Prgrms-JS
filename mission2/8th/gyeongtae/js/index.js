import App from './App.js'

// data 초기화
let data = window.localStorage.getItem('todoList')
data = data ? JSON.parse(data) : []

const app = new App(data, document.querySelector('#app'))
