import App from './App.js'

console.log("index.js is loading")
let data =[
    {
      id:1,
      text: 'JS 공부하기',
      isCompleted: true,
      visible:true,
    },
    {
      id:2,
      text: 'JS 복습하기',
      isCompleted: false,
      visible:true,
    },
  ]
const $app = document.querySelector('#app')

new App($app, data)