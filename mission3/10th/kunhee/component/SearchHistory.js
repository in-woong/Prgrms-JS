export default function SearchHistory({ $app, initialState, onClick }){
    this.state = initialState
    this.onClick = onClick
  
    const $target = document.createElement('ul')
    $target.className = 'TodoList'
    $app.appendChild($target)
  
    this.$target = $target
  
    this.render = function () {
      this.$target.innerHTML = this.state.map(({ key }, index) => `<li data-index="${index}">${key}</li>`).join('')
    }
  
    this.setState = function (nextState) {
      this.state = nextState
      this.render()
    }
  
    this.render()
    this.$target.addEventListener('click', (e) => {
      const index = parseInt(e.target.closest('li').dataset.index)
      console.log(index)
      this.onClick(index)
    })
  }
