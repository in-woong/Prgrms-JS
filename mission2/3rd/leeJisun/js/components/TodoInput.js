import { addData } from '../actions'

export function TodoInput(data) {
  this.setState = nextData => {
    data = nextData
  }

  // add event
  const input = document.getElementById('input-todo')
  document.getElementById('btn-add').addEventListener('click', () => {
    addData(input.value, data)
    input.value = ''
    input.focus()
  })
}
