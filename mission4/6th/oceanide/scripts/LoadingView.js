function LoadingView($target) {
  if (!(this instanceof LoadingView)) {
    throw new Error('LoadingView must be called with new')
  }

  if (!$target) {
    throw new Error('$target must be injected')
  }

  this.render = function () {
    this.$target.innerHTML = this.isLoading ? 'Loading...' : ''
  }

  this.setState = function (isLoading) {
    this.isLoading = isLoading
    this.render()
  }

  this.init = function () {
    this.$target = $target
    this.isLoading = false
  }

  this.init()
}

export default LoadingView
