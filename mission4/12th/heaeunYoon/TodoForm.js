export default function TodoForm({ $app, onChange, isActive }) {
  this.state = {
    isActive,
  }

  this.$form = document.createElement('form')

  $app.appendChild(this.$form)

  this.setState = (nextState) => {
    this.state = nextState

    this.render()
  }

  this.render = async () => {
    if (!this.state.isActive) {
      return
    }

    const htmlString = `
      <input type="text" />
      <button type="submit">추가</button>
    `

    this.$form.innerHTML = htmlString

    this.focus()
  }

  this.focus = () => {
    const $input = this.$form.querySelector('input')
    $input.focus()
  }

  this.setEvent = () => {
    this.$form.addEventListener('submit', async (e) => {
      e.preventDefault()

      const { value } = e.target.querySelector('input')

      if (!value) {
        return
      }

      onChange({ value })

      this.clearInput()
    })
  }

  this.clearInput = () => {
    const $input = this.$form.querySelector('input')

    $input.value = ''
  }

  this.render()
  this.setEvent()
}
