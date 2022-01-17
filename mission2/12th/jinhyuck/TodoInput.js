const ENTER = 'Enter'

function TodoInput (setState) {
  const $input = document.querySelector('#todo-input')

  $input.addEventListener('keypress', event => {
    const { key, target: { value: text } } = event
    const isCompleted = false

    if (key === ENTER) {
      setState({ text, isCompleted })
      event.target.value = ''
    }
  })
}
