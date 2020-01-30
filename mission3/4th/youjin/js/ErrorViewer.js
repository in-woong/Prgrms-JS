export default class ErrorViewer {
  constructor(errorMsg) {
    this.$errorArea = document.createElement('div')
    
    const $app = document.querySelector('#app')
    $app.appendChild(this.$errorArea)

    this.render(errorMsg)
  }

  render(errorMsg) {
    this.$errorArea.innerHTML = `<strong>${errorMsg}</strong>`
  }
}