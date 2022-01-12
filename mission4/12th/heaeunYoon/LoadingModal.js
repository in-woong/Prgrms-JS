export default function LoadingModal({ $app, initialState }) {
  this.state = initialState

  this.$modal = document.createElement('div')
  this.$modal.className = 'modal'

  this.init = () => {
    this.$modal.innerHTML = `
      <div>
        로딩중....
      </div>
    `
  }

  this.render = () => {
    if (!this.state) {
      this.$modal.remove()
      return
    }

    $app.appendChild(this.$modal)
  }

  this.setState = (nextState) => {
    this.state = nextState

    this.render()
  }

  this.render()
  this.init()
}
