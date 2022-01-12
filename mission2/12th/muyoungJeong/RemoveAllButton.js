function RemoveAllButton($target) {
  this.$target = $target

  this.render()
}

RemoveAllButton.prototype.render = function() {
  this.$target.innerHTML = `
    <button onclick="removeAll()">전부 삭제</button>
  `
}

function removeAll() {
  const removeAllEvent = new Event('removeAll')
  window.dispatchEvent(removeAllEvent)
}
