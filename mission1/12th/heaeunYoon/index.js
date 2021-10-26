import App from './App.js'

const TODOS = [
  {
    id: '1',
    text: 'todo text',
    isCompleted: false,
  },
]

new App({ todos: TODOS })
