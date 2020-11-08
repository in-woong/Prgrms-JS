import  App  from './App.js'

let data = window.localStorage.getItem("todoList");
new App(data ? JSON.parse(data) : [])
