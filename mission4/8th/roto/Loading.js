export default function Loading({ $app, initialState }) {
  this.$target = document.createElement('div')

  this.state = initialState

  $app.appendChild(this.$target)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$target.style.position = 'fixed'
    this.$target.style.top = '10px'
    this.$target.style.right = '10px'
    this.$target.style.width = '200px'
    this.$target.style.height = '100px'
    this.$target.innerHTML = `<img width="100%" src="https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif">`

    this.$target.style.display = this.state.isLoading ? 'block' : 'none'
  }

  this.render()
}
