export default function Button({ $app, text, onClick }) {
  this.$button = document.createElement('button')

  $app.appendChild(this.$button)

  this.render = () => {
    this.$button.textContent = text
  }

  this.setEvent = () => {
    this.$button.addEventListener('click', onClick)
  }

  this.render()
  this.setEvent()
}
