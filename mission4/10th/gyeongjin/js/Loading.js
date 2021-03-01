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

    // review2
    // 어짜피 렌더링 유무를 style.display로 하고있기 때문에 if문은 필요하지 않게 됨
    // if (isLoading) {
    this.$loadingContainer.innerHTML = '<svg class="loading-circle"><circle cx="50%" cy="50%" r="25"></circle></svg>'
  }
  // }

  this.render()
}
