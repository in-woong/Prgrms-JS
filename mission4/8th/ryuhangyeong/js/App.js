import {
  TodoCount,
  TodoInput,
  TodoList,
  UserList,
  UserName,
  Loading,
} from './components/index.js'

import {
  getTodoList,
  createTodo,
  removeTodo,
  toggleCompletedTodo,
  getUserList,
  getTodoListDelay,
} from './utils/api/todo.js'

import { isValidTodos } from './utils/validate.js'
import { getTodoStatus } from './utils/computed/todo.js'

export default class App {
  username = 'ryuhangyeong'
  todos = []
  users = []

  constructor($target) {
    this.init($target)
  }

  async init($target) {
    this.Loading = new Loading({
      $target,
    })

    this.Loading.show()

    this.todos = await getTodoListDelay({
      username: this.username,
      delay: 2000,
    })

    this.users = await getUserList()

    this.Loading.hide()

    this.userList = new UserList({
      $target,
      initialData: this.users,
      onSearch: async (username) => {
        this.Loading.show()

        this.username = username
        this.todos = await getTodoList({
          username: this.username,
        })
        this.setState(this.todos)
        this.UserName.setState(this.username)

        this.Loading.hide()
      },
    })

    this.UserName = new UserName({
      $target,
      initialData: this.username,
    })

    this.TodoInput = new TodoInput({
      $target,
      onCreate: async (value) => {
        const data = await createTodo({
          username: this.username,
          content: value,
        })
        const { id: _id, content, isCompleted } = data

        this.todos = [...this.todos, { _id, content, isCompleted }]
        this.setState(this.todos)
      },
    })

    this.TodoList = new TodoList({
      $target,
      initialData: this.todos,
      onToggle: async (_id) => {
        await toggleCompletedTodo({ username: this.username, _id })
        const idx = this.todos.findIndex((todo) => todo._id === _id)

        this.todos[idx].isCompleted = !this.todos[idx].isCompleted
        this.setState(this.todos)
      },
      onRemove: async (_id) => {
        await removeTodo({ username: this.username, _id })

        this.todos = this.todos.filter((todo) => todo._id !== _id)
        this.setState(this.todos)
      },
    })

    this.TodoCount = new TodoCount({
      $target,
      initialData: getTodoStatus(this.todos),
    })
  }

  setState(nextData) {
    isValidTodos(nextData)
    this.todos = nextData
    this.TodoList.setState(this.todos)
    this.TodoCount.setState(getTodoStatus(this.todos))
  }
}
