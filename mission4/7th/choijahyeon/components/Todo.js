export default function Todo({ target, todo }) {
  this.$target = target
  this.todo = todo
  this.render = () => {
    const $button = document.createElement('button')
    $button.textContent = 'x'
    $button.setAttribute('id', this.todo['_id'])
    const $li = document.createElement('li')
    $li.setAttribute('id', this.todo['_id'])
    $li.setAttribute('draggable', true)
    $li.textContent = this.todo.content
    $li.appendChild($button)
    if (this.todo.isCompleted) {
      $li.classList.add('completed')
    }
    this.$target.appendChild($li)
  }
  this.render()
}
