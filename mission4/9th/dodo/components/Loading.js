const HIDE = 'hide'

export default function Loading({ $target }) {
  this.$target = $target
  this.isLoading = false

  this.init = () => {
    this.$target.textContent = 'loading...'
    this.render()
  }

  this.setState = (isLoading) => {
    if (typeof isLoading !== 'boolean') throw Error('isLoading type error')
    this.isLoading = isLoading
    this.render()
  }

  this.render = () => {
    this.isLoading ? this.$target.classList.remove(HIDE) : this.$target.classList.add(HIDE)
  }

  this.init()
}
