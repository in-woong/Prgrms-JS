function SearchInput(target, onKeyUp) {
  if (this.constructor !== SearchInput) {
    throw new Error('SearchInput should be called by "new" keyword')
  }

  this.target = target
  this.onKeyUp = onKeyUp

  this.init =  () => {
    document.getElementById(this.target)
            .addEventListener('keyup', (e) => this.onKeyUp(e))
  }

  this.init()
}
