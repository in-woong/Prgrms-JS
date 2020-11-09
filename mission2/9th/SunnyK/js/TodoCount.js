import { useNewKeyword } from './validation.js'

export default function TodoCount({ noTodo, noCompleteTodo, $target }) {
  useNewKeyword(new.target)

  this.noTodo = noTodo
  this.noCompleteTodo = noCompleteTodo
  this.$target = $target

  this.setState = ({ noTodo, noCompleteTodo, $target }) => {
    this.noTodo = noTodo
    this.noCompleteTodo = noCompleteTodo
    this.$target = $target

    this.render()
  }

  this.render = () => {
    $target.innerHTML = `전체 할 일 개수: ${this.noTodo} / 완료된 할 일: ${this.noCompleteTodo}`
  }

  this.render()
}
