export class TodoInput {
  constructor({ $app, addTodoItem, deleteAllItem }) {
    const $addForm = document.createElement('form')
    const $addItemInput = document.createElement('input')
    const $addItemBtn = document.createElement('button')
    const $deletAllBtn = document.createElement('button')

    this.$app = $app
    this.addTodoItem = addTodoItem
    this.deleteAllItem = deleteAllItem
    this.$addForm = $addForm
    this.$addItemInput = $addItemInput
    this.$deletAllBtn = $deletAllBtn
    $addItemInput.type = 'text'
    $addItemInput.classList.add('add-item')
    $addItemBtn.innerText = 'add'
    $deletAllBtn.innerText = 'delete all'

    $app.append($addForm, $deletAllBtn)
    $addForm.append($addItemInput, $addItemBtn)

    this.render()
  }

  render = () => {
    this.$addForm.addEventListener('submit', (e) => {
      e.preventDefault()
      let inputValue = this.$addItemInput.value
      this.addTodoItem(inputValue)
      this.$addItemInput.value = ''
    })

    this.$deletAllBtn.addEventListener(
      'click',
      () => {
        const event = new Event('removeAll')
        this.deleteAllItem()
        this.$deletAllBtn.dispatchEvent(event)
      },
      false,
    )
  }
}
