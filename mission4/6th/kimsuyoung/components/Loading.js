function Loading({ $loading }) {
  this.isLoading = false
  this.render = () => {
    $loading.innerHTML = this.isLoading ? 'loading' : ''
  }

  this.setState = (isLoading) => {
    this.isLoading = isLoading
    this.render()
  }
  this.render()
}

export default Loading
