import App from './App.js'

const initialState = [
  {
    text: '',
    isCompleted: false
  },
  {
    text: 'data2',
    isCompleted: true
  }
]

const $app = document.querySelector('#app')

new App($app, initialState)
