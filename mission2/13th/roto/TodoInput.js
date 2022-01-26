import { dispatchRemoveAllEvent } from './customEvent.js'

export default function TodoInput({ $target, onAddTodo }) {
  this.$todoInput = document.createElement('div')
  this.$removeAllButton = document.createElement('button')
  this.$removeAllButton.innerText = 'Remove All'

  $target.appendChild(this.$todoInput)
  $target.appendChild(this.$removeAllButton)

  this.render = () => {
    this.$todoInput.innerHTML = `
      <form>
        <input type="text" placeholder="할 일을 입력해주세요"><button>입력하기</button>
      </form>`
  }

  this.$todoInput.addEventListener('submit', (e) => {
    e.preventDefault()
    const $input = this.$todoInput.querySelector('input')
    console.log($input)
    onAddTodo($input.value)
    $input.value = ''
  })

  this.$removeAllButton.addEventListener('click', (e) => {
    dispatchRemoveAllEvent()
  })

  this.render()
}
