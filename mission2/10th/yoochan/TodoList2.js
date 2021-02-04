function TodoList($app, initialState, onClick) {
    this.state = initialState
    this.onClick = onClick

    const $target = document.createElement('ul')
    $target.className = 'TodoList'
    $app.appendChild($target)

    this.$target = $target
  
    this.render = function() {
      this.$target.innerHTML = this.state
        .map(({text, isCompleted}, index) => `
        <li class="list" data-index="${index}">
          <span>${isCompleted ? `<s>${text}</s>` : text}</span>
          <button data-index="${index}">삭제</button>
        </li>
        `)
        .join('')

      const $lis = this.$target.querySelectorAll('li')
      $lis.forEach(($li) => {
        $li.addEventListener('click', (e) => {
          const index = e.target.closest('li').dataset.index
          this.onClick(index)
        })
      })

      const $btns = this.$target.querySelectorAll('button')
      $btns.forEach(($btn) => {
        $btn.addEventListener('click', (e) => {
          const index = e.target.dataset.index
          const toBoDeleted = document.querySelector(`.list[data-index="${index}"]`);
          toBoDeleted.remove()
          console.log(toBoDeleted)
        })
      })
    }
  
    this.setState = function(nextState) {
      this.state = nextState
      this.render()
    }
  
    this.render()
  }