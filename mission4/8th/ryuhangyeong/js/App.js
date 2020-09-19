import { TodoCount, TodoInput, TodoList, UserList } from './components/index.js'
import {
  getTodoList,
  createTodo,
  removeTodo,
  toggleTodoCompleted,
  getUserList,
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
    this.todos = await getTodoList({ username: this.username })
    this.users = await getUserList()

    this.userList = new UserList({
      $target,
      initialData: this.users,
      onSearch: async (username) => {
        this.username = username
        this.todos = await getTodoList({ username: this.username })
        this.setState(this.todos)
      },
    })

    this.todoInput = new TodoInput({
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

    this.todoList = new TodoList({
      $target,
      initialData: this.todos,
      onToggle: async (_id) => {
        await toggleTodoCompleted({ username: this.username, _id })
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

    this.todoCount = new TodoCount({
      $target,
      initialData: getTodoStatus(this.todos),
    })
  }

  setState(nextData) {
    isValidTodos(nextData)
    this.todos = nextData
    this.todoList.setState(this.todos)
    this.todoCount.setState(getTodoStatus(this.todos))
  }
}
