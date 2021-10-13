import App from './App.js'
import generateUniqueID from './utils/generateUniqueID.js'

let data = [
  {
    id: generateUniqueID(),
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    id: generateUniqueID(),
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const app = new App(document.querySelector('#app'), data)
app.render()
