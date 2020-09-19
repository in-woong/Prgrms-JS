import { getTodoList } from './api.js'
import App from './App.js'

try {
  //const userName = prompt('이름을 입력해주세요.')
  const userName = 'gyeongtae'
  // data 초기화
  let data = window.localStorage.getItem('todoList')
  data = data ? JSON.parse(data) : []
  const app = new App(data, document.querySelector('#app'))
} catch (error) {
  console.log(error)
}
