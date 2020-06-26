export default function TodoInput({ onAdd }) {
  if (!(this instanceof TodoInput)) {
    throw new Error('new 연산자를 사용해주세요.')
  }

  const $element = document.createElement('template')
  $element.innerHTML = `
    <input type="text" value="">
    <button type="button" class="todo__button-add">추가하기</button>
    <button type="button" class="todo__button-remove-all">전체 삭제</button>
  `

  this.$inputElement = $element.content.querySelector('input')
  this.$buttonAddElement = $element.content.querySelector('.todo__button-add')
  this.$buttonRemoveAllElement = $element.content.querySelector(
    '.todo__button-remove-all'
  )

  const removeAllEvent = new Event('removeAll')

  this.$inputElement.addEventListener('keyup', (e) => {
    const { target: $target, keyCode } = e
    const value = $target.value.trim()
    const ENTER_KEY = 13

    if (keyCode === ENTER_KEY && value) {
      onAdd(value)
      $target.value = ''
    }
  })

  this.$buttonAddElement.addEventListener('click', () => {
    const value = this.$inputElement.value.trim()

    if (value) {
      onAdd(value)
      this.$inputElement.value = ''
      this.$inputElement.focus()
    }
  })

  this.$buttonRemoveAllElement.addEventListener('click', (e) => {
    e.target.dispatchEvent(removeAllEvent)
  })
}
