import { Core } from './Core.js'

export class TodoCount extends Core {
  template() {
    const { todos } = this.$props

    return `
      <p class="todo-count__total">모든 할 일 :
        <span>${todos?.length || 0}</span>개
      </p>
      <p class="todo-count__done">완료 :
        <span>${
          todos?.filter((todo) => Boolean(todo.isCompleted)).length || 0
        }</span>개
      </p>
    `
  }
}
