function TodoList($target, data) {
  this.$target = $target
  this.data = data

  this.addLi = function({ text, isCompleted}) {
    const $li = document.createElement('li')
    $li.innerText = text
    $li.className = isCompleted && 'deleted'

    const $checkbox = document.createElement('input')
    $checkbox.type = 'checkbox'
    $checkbox.addEventListener('click', event => {
      const $parent = $checkbox.parentElement
      $parent.classList.toggle('deleted')
    })

    $li.appendChild($checkbox)
    return $li
  }

  this.render = function() {
    this.$target.innerHTML = ''

    this.data.forEach(datum => {
      const $li = this.addLi(datum)
      this.$target.appendChild($li)
    })
  }

  this.setState = nextData => {
    this.data = [...this.data, nextData]
    this.render()
  }

  this.render()
}
