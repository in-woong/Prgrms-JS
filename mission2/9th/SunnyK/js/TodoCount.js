import { useNewKeyword } from './validation.js'

export default function TodoCount({ $app, todoData }) {
  useNewKeyword(new.target)

  const $target = document.createElement('div')
  $target.className = 'TodoCount'
  this.$target = $target
  $app.appendChild($target)

  this.todoData = todoData
  this.$target = $target

  this.setState = (nextData) => {
    this.todoData = nextData
    this.render()
  }

  this.render = () => {
    $target.innerHTML = `전체 할 일 개수: ${
      this.todoData.length
    } / 완료된 할 일: ${
      this.todoData.filter((todo) => todo.isCompleted).length
    }`
  }

  this.render()
}
