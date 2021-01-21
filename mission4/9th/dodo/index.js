import App from './components/App.js'
import createAPI from './api.js'
;(async function () {
  try {
    const API = new createAPI({ initialName: 'dodo' })
    new App({ target: document.getElementById('root'), API, todos: await API.getTodos(), users: await API.getUsers() })
  } catch (error) {
    console.error(error)
  }
})()
