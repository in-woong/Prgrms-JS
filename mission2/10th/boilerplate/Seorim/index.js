import App from './App.js'

const initialState = JSON.parse(localStorage.getItem('todos') || '[]')
const $app = document.querySelector('#app')

new App($app, initialState)
