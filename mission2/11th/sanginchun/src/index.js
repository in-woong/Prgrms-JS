import App from './components/App.js'

const initialData = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

new App(document.querySelector('#app'), initialData)
