class RemoveAllButton {
  constructor({ $app }) {
    this.$target = document.createElement('button')
    this.$target.setAttribute('type', 'button')

    this.$target.className = 'remove-all-button'
    this.$target.innerText = '전체 삭제'

    this.$target.addEventListener('click', function () {
      this.dispatchEvent(new Event('removeAll', { bubbles: true }))
    })

    $app.appendChild(this.$target)
  }
}

export default RemoveAllButton
