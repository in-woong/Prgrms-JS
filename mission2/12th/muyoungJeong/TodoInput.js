function TodoInput(addTodo, $target) {
  this.addTodo = addTodo
  this.$target = $target
  this.render()
}

TodoInput.prototype.render = function() {
  const $form = document.createElement('form')
  $form.addEventListener('submit', (e) => {
    e.preventDefault()
  
    const $input = e.target.querySelector('input[type="text"]')
  
    this.addTodo({ text: $input.value, isCompleted: false })
    $input.value = ""
  })

  $form.innerHTML = `
    <input type="text" value>
    <input type="submit" value="추가">
  `

  this.$target.innerHTML = ''
  this.$target.appendChild($form)
}
