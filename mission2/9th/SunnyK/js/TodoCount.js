import { useNewKeyword } from './validation.js'

export default function TodoCount({ numOfTodo, numOfCompleteTodo, $target }) {
  useNewKeyword(new.target)

  this.numOfTodo = numOfTodo
  this.numOfCompleteTodo = numOfCompleteTodo
  this.$target = $target

  this.setState = ({ numOfTodo, numOfCompleteTodo, $target }) => {
    this.numOfTodo = numOfTodo
    this.numOfCompleteTodo = numOfCompleteTodo
    this.$target = $target

    this.render()
  }

  this.render = () => {
    $target.innerHTML = `전체 할 일 개수: ${this.numOfTodo} / 완료된 할 일: ${this.numOfCompleteTodo}`
  }

  this.render()
}
