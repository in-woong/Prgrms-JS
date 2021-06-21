function Loading({ $target, isLoading }) {
  this.$target = $target
  this.isLoading = isLoading
  this.loadingDiv = document.createElement('div')
  this.$target.appendChild(this.loadingDiv)

  this.setState = (isLoadingStatus) => {
    this.isLoading = isLoadingStatus
    this.render()
  }

  this.render = () => {
    if (!this.isLoading) {
      this.loadingDiv.innerHTML = ''
    } else {
      this.loadingDiv.innerHTML = `
        <div class="loadingWrapper">
          <div class="loading">로딩중....</div>
        </div>
      `
    }
  }
  this.render()
}

export default Loading
