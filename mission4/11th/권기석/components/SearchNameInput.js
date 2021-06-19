export default function SearchNameInput({ $app, onSearch }) {
  this.$searchNameInput = document.createElement('input')
  $app.appendChild(this.$searchNameInput)

  this.$searchNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.value) {
      onSearch(e.target.value)
    }
  })
}
