import App from './App.js'
import ErrorViewer from './ErrorViewer.js'
import { api } from './api.js'

const init = async () => {
  const defaultUserName = 'roto'
  try {
    const app = new App({
      username: defaultUserName,
      data: await api.getTodosJson(defaultUserName),
      $targetTodoList: document.querySelector('#todo-list'),
      $targetTodoInput: document.querySelector('#todo-input'),
      $targetRemoveBtn: document.querySelector('#add-todo-button'),
      $targetUserList: document.querySelector('#user-list'),
      $targetUserName: document.querySelector('#user-name'),
      userList: await api.getUserList(),
    })
  } catch (err) {
    const $errorTarget = document.querySelector('#errorView-container')
    new ErrorViewer($errorTarget).render(err)
  }
}

init()
