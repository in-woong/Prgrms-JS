export default function TodoList({ $target, data, onDelete, onToggleCompleted }) {
  
  $target.addEventListener('click', function(e) {
    const id = e.target.closest('li').dataset.id

    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      onDelete(id)
    } else {
      onToggleCompleted(id)
    }
  })

  this.setState = function(nextData) {
    data = nextData
    this.render()
  }

  this.render = function() {
    const htmlString = data.map(function(todo) {
      const contentHTML = todo.isCompleted
        ? `<strike>${todo.content}</strike>`
        : `${todo.content}`

      return `<li data-id="${
        todo._id
      }">${contentHTML} <button class="remove-button">Remove</button></li>`
    })

    $target.innerHTML = `<ul>${htmlString.join('')}</ul>`
  }

  this.render()
}
