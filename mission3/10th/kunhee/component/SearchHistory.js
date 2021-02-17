export default function SearchHistory({$sec02, initialState, onClickItem }){
    this.state = initialState
    this.$target = document.createElement('ul')
    this.$target.className = 'TodoList'
    $sec02.appendChild(this.$target)
  
    this.$target.addEventListener('click', (e) => {
      const index = parseInt(e.target.closest('li').dataset.index)
      onClickItem(index)
    })

    this.setState = function (nextState) {
      this.state = nextState
      this.render()
    }

    this.render = function () {
      this.$target.innerHTML = this.state.map(({ key }, index) => `<li data-index="${index}"><a href="#">${key}</a></li>`).join('')
    }
  
    this.render()
  }
