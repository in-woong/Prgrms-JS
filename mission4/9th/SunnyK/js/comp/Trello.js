import TodoList from './TodoList.js'
import { createElementWithClass } from '../util/util.js'

export default function Trello({
  $parent,
  userName,
  todos,
  isLoading,
  onDeleteTodo,
  onToggleTodo,
}) {
  this.$target = createElementWithClass({
    tagName: 'section',
    className: 'Trello',
  })
  $parent.appendChild(this.$target)

  this.$title = createElementWithClass({
    tagName: 'h2',
    className: 'trello-title',
  })
  this.$title.textContent = '사용자를 선택하세요'
  this.$target.insertAdjacentElement('afterbegin', this.$title)

  this.userName = userName
  this.todos = todos
  this.isLoading = isLoading
  this.onDeleteTodo = onDeleteTodo
  this.onToggleTodo = onToggleTodo

  this.components = {
    uncompletedTodoList: new TodoList({
      $parent: this.$target,
      todos: this.todos.filter((todo) => !todo.isCompleted),
      status: 'uncomplete',
      onDeleteTodo: onDeleteTodo,
      onToggleTodo: onToggleTodo,
    }),
    completedTodoList: new TodoList({
      $parent: this.$target,
      todos: this.todos.filter((todo) => todo.isCompleted),
      status: 'complete',
      onDeleteTodo: onDeleteTodo,
      onToggleTodo: onToggleTodo,
    }),
  }

  this.dragstartHandler = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
  }

  this.$target.addEventListener('dragstart', this.dragstartHandler)

  this.setState = ({ nextIsLoading, nextUserName, nextTodos }) => {
    if (nextIsLoading === true) {
      this.isLoading = nextIsLoading
      this.render()
      return
    }

    this.isLoading = nextIsLoading
    this.userName = nextUserName
    this.todos = nextTodos
    this.components.uncompletedTodoList.setState({
      nextTodos: this.todos.filter((todo) => !todo.isCompleted),
    })
    this.components.completedTodoList.setState({
      nextTodos: this.todos.filter((todo) => todo.isCompleted),
    })
    this.render()
  }

  this.render = () => {
    this.$title.innerHTML = this.isLoading
      ? 'Loading...'
      : `${this.userName}의 Todolist`
  }
}
