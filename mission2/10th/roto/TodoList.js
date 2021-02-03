function TodoList({ $app, initialState, onClick }) {
  this.state = initialState
  this.onClick = onClick

  const $target = document.createElement('ul')
  $target.className = 'TodoList'
  $app.appendChild($target)

  this.$target = $target
  this.data = data

  this.render = function () {
    this.$target.innerHTML = this.state.map(({ text, isCompleted }, index) => `<li data-index="${index}">${isCompleted ? `<s>${text}</s>` : text}</li>`).join('')

    // simple way
    const $lis = this.$target.querySelectorAll('li')

    $lis.forEach(($li) => {
      $li.addEventListener('click', (e) => {
        const index = parseInt(e.target.closest('li').dataset.index)
        console.log(index)
        this.onClick(index)
      })
    })
  }

  this.setState = function (nextState) {
    this.state = nextState
    this.render()
  }

  this.render()
}
