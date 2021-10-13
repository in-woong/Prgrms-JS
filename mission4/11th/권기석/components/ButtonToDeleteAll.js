export default function ButtonToDeleteAll({ $app, onDeleteAll, init }) {
  this.init = init
  this.$button = document.createElement('button')
  this.$button.innerHTML = 'Todo 모두 삭제'
  $app.appendChild(this.$button)

  this.$button.addEventListener('click', () => {
    const res = confirm('정말 모두 삭제하시겠습니까?')
    if (res) {
      onDeleteAll()
      this.init()
    }
  })
}
