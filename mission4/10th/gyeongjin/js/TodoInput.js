export default function TodoInput({ $target, onSubmit, onDeleteAll }) {
  const $componentWrapper = document.createElement('div')
  const $form = document.createElement('form')
  const $todoInput = document.createElement('input')
  const $submitButton = document.createElement('button')
  const $deleteAllButton = document.createElement('button')

  $target.append($componentWrapper)
  $componentWrapper.append($form, $deleteAllButton)
  $form.append($todoInput, $submitButton)
  $componentWrapper.className = 'form-container'
  $deleteAllButton.innerHTML = 'Delete All'
  $submitButton.innerText = 'Add'
  $todoInput.placeholder = '할일을 입력해주세요 👀'

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  $form.addEventListener('submit', (e) => {
    e.preventDefault()
    onSubmit($todoInput.value)
    $todoInput.value = ''
  })

  $deleteAllButton.addEventListener('click', () => {
    onDeleteAll()
  })

  this.render = () => {}
  this.render()
}
