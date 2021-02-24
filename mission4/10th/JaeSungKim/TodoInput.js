const ENTER_KEY_CODE = 13

function TodoInput({ $target, onSubmit }) {
  if (!(this instanceof TodoInput)) {
    return new TodoInput({ $target, onSubmit })
  }

  const $input = $target.input
  const $sumbit = $target.submit

  $input.addEventListener('keydown', (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      const todoText = $input.value
      onSubmit(todoText)
      $input.value = ''
    }
  })

  $sumbit.addEventListener('click', function () {
    const todoText = $input.value
    onSubmit(todoText)
    $input.value = ''
  })
}
