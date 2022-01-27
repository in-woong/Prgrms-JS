import { RemoveAll } from "./customEvent.js"

export default function TodoInput({ $target, onAddTodo }) {
  this.$target = $target
  this.$form = document.createElement('form')
  this.$button = document.createElement('button')
  this.$button.innerText = 'RemoveAll'
  $target.append(this.$form, this.$button)

  this.$form.addEventListener('submit', (e) => {
    e.preventDefault()
    this.$input = this.$target.querySelector('input')
    onAddTodo(this.$input)
    this.$input.value = ''
  })

  this.$button.addEventListener('click', RemoveAll)

  this.render = () => {
    this.$form.innerHTML = `
      <input type="text" placeholder="입력하세요"/>
      <input type="submit" value="SUBMIT"/>
    `
  }
  this.render()
}
