import { validateInstance } from './validation.js'

function TodoInput({ $app, addTodo }) {
  validateInstance(this, TodoInput)

  this.$todoInput = document.createElement('form')
  this.$todoInput.classList.add('input-form')

  this.$reomveAllButton = document.createElement('button')
  this.$reomveAllButton.innerText = '초기화'

  $app.appendChild(this.$todoInput)
  $app.appendChild(this.$reomveAllButton)

  this.render = () => {
    this.$todoInput.innerHTML = `
      <input type='text' name='todo'><button>추가</button>
    `
  }

  this.setEvent = () => {
    this.$todoInput.addEventListener('submit', (e) => {
      e.preventDefault()

      const $input = e.target.querySelector('input[name=todo]')
      addTodo($input.value)

      // input 값 초기화
      $input.value = ''
      // input에 입력해서 추가 후에, 추가적인 조작없이 바로 새로운 Todo를 입력받을 수 있도록 focus
      $input.focus()
    })

    this.$reomveAllButton.addEventListener('click', (e) => {
      // 버튼 클릭 시 removeAll 이벤트 발생시키기
      $app.dispatchEvent(new CustomEvent('removeAll', { bubbles: true }))
    })
  }

  this.setEvent()
  this.render()
}

export default TodoInput
