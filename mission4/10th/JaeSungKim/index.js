import { fetchData, fetchUser } from './api.js'
import App from './App.js'
;(async function () {
  let initialUser = 'turquoiseluv'
  const todoData = await fetchData(initialUser)
  const userData = await fetchUser(initialUser)

  try {
    new App(initialUser, todoData, userData)
  } catch (error) {
    throw error
  }
})()
