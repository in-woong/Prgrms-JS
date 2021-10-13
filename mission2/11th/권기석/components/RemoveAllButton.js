function RemoveAllButton($target) {
  this.$target = $target
  this.$removeButton = document.createElement('button')
  this.$removeButton.innerHTML = '모두 삭제'

  this.$target.appendChild(this.$removeButton)

  this.$removeButton.addEventListener('click', () => {
    $target.dispatchEvent(new Event('removeAll'))
  })
}
