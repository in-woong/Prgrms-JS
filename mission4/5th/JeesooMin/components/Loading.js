function Loading($element) {
  if (!(this instanceof Loading)) {
    throw new Error('[Loading] new 키워드로 실행되지 않았습니다.')
  }

  this.$element = $element
  this.loading = false

  this.init = function() {
    this.render()
  }

  this.setState = function(loading) {
    this.loading = loading
    this.render()
  }

  this.render = function() {
    this.$element.className = this.loading ? 'loading' : 'loaded'
    this.$element.innerHTML = this.loading ? '<h1>loading...</h1>' : ''
  }

  this.init()
}

export default Loading
