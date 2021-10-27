import App from './App.js'

import { getStorage } from './utils/storage.js'

const initialState = {
  todos: [],
}
const store = getStorage({ key: 'store' }) || initialState

new App(store)
