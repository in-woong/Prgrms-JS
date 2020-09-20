import { getTodoList, getUsers } from './api.js'
import App from './App.js'

// app 초기화
async function initApp(userName, querySelector) {
  // data 초기화
  let data = await getTodoList(userName)
  data = data ? data : []
  // users 초기화
  let users = await getUsers()
  users = users ? users : [userName]
  return await new App(data, querySelector, userName, users)
}

try {
  //const userName = prompt('이름을 입력해주세요.')
  const userName = 'gyeongtae'
  const app = initApp(userName, document.querySelector('#app'))
} catch (error) {
  console.log(error)
}
