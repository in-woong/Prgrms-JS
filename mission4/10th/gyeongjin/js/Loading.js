export default function Loading({ $target, initialState }) {
  const $loadingContainer = document.createElement('div')

  $target.append($loadingContainer)
  this.$loadingContainer = $loadingContainer

  $loadingContainer.className = 'loading-container'

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { isLoading } = this.state
    this.$loadingContainer.style.display = isLoading ? 'flex' : 'none'

    if (isLoading) {
      this.$loadingContainer.innerHTML = '<svg class="loading-circle"><circle cx="50%" cy="50%" r="25"></circle></svg>'
    }
  }

  this.render()
}
