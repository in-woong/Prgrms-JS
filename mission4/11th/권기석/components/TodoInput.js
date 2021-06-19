export default function TodoInput({ $app, onSearch }) {
  this.$todoInput = document.createElement('input')
  $app.appendChild(this.$todoInput)

  this.$todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.value) {
      onSearch(e.target.value)
    }
  })
}
