import { Core } from './Core.js'

export class TodoCount extends Core {
  setup() {
    this.$state = this.$props.todos

    const element = document.createElement('div')
    element.dataset.component = 'todo-count'

    this.$target.appendChild(element)
    this.$target = element
  }

  template() {
    const todos = this.$state
    const completeTodosCount = todos?.filter((todo) =>
      Boolean(todo.isCompleted)
    ).length

    return `
      <p class="todo-count__total">모든 할 일 : <span>${
        todos?.length || 0
      }</span>개</p>
      <p class="todo-count__done">완료 :
        <span>${completeTodosCount || 0}</span>개
      </p>
    `
  }
}
