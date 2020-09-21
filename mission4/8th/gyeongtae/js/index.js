import { getTodoList, getUsers } from './api.js'
import App from './App.js'

// app 초기화
async function initApp(userName, querySelector) {
  // data 초기화
  const data = {}
  data.todoList = await getTodoList(userName, 0)
  data.users = await getUsers()
  data.userName = userName
  return await new App(data, querySelector)
}

try {
  //const userName = prompt('이름을 입력해주세요.')
  const userName = 'gyeongtae'
  const app = initApp(userName, document.querySelector('#app'))
} catch (error) {
  console.log(error)
}
