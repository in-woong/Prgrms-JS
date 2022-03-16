import * as todoRepository from './api.js'
import App from './App.js'

const $target = document.querySelector('.app')

const initialUsername = 'inwoong'
const initialState = await todoRepository.getTodo(initialUsername)
const userList = await todoRepository.getUsers()
new App({ $target, initialState, initialUsername, userList })
