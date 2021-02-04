function TodoList({ $app, initialState, ontextClick, ondelClick }) {
  this.state = initialState
  this.ontextClick = ontextClick
  this.ondelClick = ondelClick

  const $target = document.createElement('ul')
  $target.className = 'TodoList'
  $app.appendChild($target)

  this.$target = $target

  this.render = function () {
    this.$target.innerHTML = this.state
    .map(({text, isCompleted}, index) => `
    <li class="list" data-index="${index}">
      <span class="text">${isCompleted ? `<s>${text}</s>` : text}</span>
      <button class="deleteBtn"data-index="${index}">삭제</button>
    </li>
    `)
    .join('')
  }

  this.setState = function (nextState) {
    this.state = nextState
    this.render()
  }

  this.render()
  this.$target.addEventListener('click', (e) => {
    const index = parseInt(e.target.closest('li').dataset.index)
    if(e.target.className === 'text' ||  e.target.parentNode.className === 'text'){
      this.ontextClick(index)
    }
    if(e.target.className === 'deleteBtn'){
      this.ondelClick(index)
    }
  })
}