const app = new App('todo-app', 'todo-list', 'todo-count', 'todo-input')

const removeButton = document.getElementById('todo-remove')
removeButton.addEventListener('click', function () {
  const removeAllEvent = new CustomEvent('removeAll', {
    bubbles: true,
  })
  removeButton.dispatchEvent(removeAllEvent)
})
