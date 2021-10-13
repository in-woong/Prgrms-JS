class RemoveAllButton {
  constructor({ $parent }) {
    this.$target = document.createElement('button')
    this.$target.innerText = '전체 삭제'
    this.$target.setAttribute('data-component-type', 'RemoveAllButton')
    
    this.$target.addEventListener('click', function() {
      this.dispatchEvent(new Event('removeAll', { bubbles: true }))
    })

    $parent.appendChild(this.$target)
  }
}

export default RemoveAllButton
