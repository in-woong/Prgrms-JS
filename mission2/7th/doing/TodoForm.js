function TodoInput(formTag, addTodo) {
  this.$form = validateTag(document.querySelector(formTag))
  this.$input = document.createElement('input')
  this.$input.setAttribute('type', 'text')
  this.value = ''
  function validateTag(tag) {
    if (!(tag instanceof HTMLElement)) {
      throw new Error('tag를 다시 설정해주세요.')
    }
    return tag
  }

  const onChange = (e) => {
    e.preventDefault()

    addTodo(this.$input.value)

    this.$input.value = ''
    this.$input.focus()
  }

  this.render = () => {
    const $submitBtn = document.createElement('button')
    const $removeAllBtn = document.createElement('button')

    $submitBtn.setAttribute('type', 'submit')
    $submitBtn.innerText = '추가'
    $removeAllBtn.setAttribute('type', 'button')
    $removeAllBtn.innerText = 'remove All'

    const eventRemoveAll = new CustomEvent('removeAll', {
      bubbles: true,
    })
    $removeAllBtn.addEventListener('click', (e) => {
      e.target.dispatchEvent(eventRemoveAll)
    })

    this.$form.addEventListener('submit', onChange)

    this.$form.appendChild(this.$input)
    this.$form.appendChild($submitBtn)
    this.$form.appendChild($removeAllBtn)
  }
}

export default TodoInput
