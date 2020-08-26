import {
  TODO_LIST,
  USERNAME,
  TODO_INPUT,
  ADD_TODO_BUTTON,
  USER_LIST,
  USER_NAME,
  LOADING_NOTICE,
  DELAY,
} from './src/constants.js'
import App from './src/App.js'

new App({
  delay: DELAY,
  username: USERNAME,
  userListId: USER_LIST,
  usernameId: USER_NAME,
  todoListId: TODO_LIST,
  todoInputId: TODO_INPUT,
  addButtonId: ADD_TODO_BUTTON,
  loadingNoticeId: LOADING_NOTICE,
})
