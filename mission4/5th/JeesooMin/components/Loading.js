function Loading($element) {
  if (!(this instanceof Loading)) {
    throw new Error('[Loading] new 키워드로 실행되지 않았습니다.')
  }

  this.$element = $element

  this.init = function() {
    this.$element.className = 'loading'
    this.$element.innerHTML = '<h1>loading...</h1>'
  }

  this.setState = function(loading) {
    this.$element.className = loading ? 'loading' : 'loaded'
    this.$element.innerHTML = loading ? '<h1>loading...</h1>' : ''
  }

  this.init()
}

export default Loading
