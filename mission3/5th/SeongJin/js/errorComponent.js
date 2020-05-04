export default function errorComponent(error) {
  this.$errorElement = document.createElement('div')
  const $app = document.querySelector('#app')
  $app.appendChild(this.$errorElement)

  this.render = () => {
    this.$errorElement.innerHTML = `<strong>${error}</strong>`
  }
}
