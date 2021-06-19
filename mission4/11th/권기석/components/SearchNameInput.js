export default function SearchNameInput({ $app, onSearch }) {
  this.$searchNameInput = document.createElement('input')
  this.$label = document.createElement('label')
  this.$label.innerHTML = '이름으로 검색'
  $app.appendChild(this.$label)
  $app.appendChild(this.$searchNameInput)

  this.$searchNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.value) {
      onSearch(e.target.value)
    }
  })
}
