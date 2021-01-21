const ENTER = 'Enter'

export default function TodoInput({ $target, addTodo }) {
  this.$target = $target
  this.$target.addEventListener('keydown', async (e) => {
    if (e.key !== ENTER) return

    e.preventDefault()
    if (this.$target.value.length > 0) {
      await addTodo(this.$target.value)
      this.$target.value = ''
    }
  })
}
