import { validateConstructor } from './utils.js'

function TodoList() {
  validateConstructor.call(this)

  this.$todoListComponent = document.createElement('div')  
  this.$todoListComponent.addEventListener('click', (e) => {
    const [action, idx] = e.target.dataset.action.split('-')
    switch(action) {
      case 'text': case 'strike': this.toggleState(+idx); break
      case 'remove': this.removeState(+idx); break
      default: break
    }
  })
  this.$todoListComponent.addEventListener('@removeAll', (e) => {
    this.removeAllState()
  })
}

TodoList.prototype.render = function(todos) {
  const todosHTMLString = todos.reduce((acc, todo, index) => {
    const { text, isCompleted } = todo
    let todoText = isCompleted ? `<strike data-action=strike-${index}>${text}</strike>` : text
    todoText = `<span data-action=text-${index}>${todoText}</span>`
    todoText = `${todoText}<button data-action=remove-${index}>삭제</button>`
    return `${acc}<div>${todoText}</div>`
  }, '')
  this.$todoListComponent.innerHTML = todosHTMLString
}

export default TodoList