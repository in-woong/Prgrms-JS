export default function TodoInput ({ $target,onAddTodo }) {
    document
    .querySelector('#todo-input')
    .addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.target.value) {
        onAddTodo(e.target.value)
        e.target.value = ''
      }
    })
  }