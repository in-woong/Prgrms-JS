import { createDom } from '../utils/utilFunctions.js'

class TodoList {
  constructor(_this, data, completeHandler, deleteHandler) {
    this.data = data
    this.render()

    this.$todoListContainer.addEventListener('click', function (e) {
      if (e.target.nodeName === 'SPAN') {
        completeHandler.call(_this, parseInt(e.target.id))
      } else if (e.target.nodeName === 'BUTTON') {
        const [_, idx] = e.target.parentNode.id.split('-')
        deleteHandler.call(_this, parseInt(idx))
      }
    })
  }

  render() {
    this.$todoListContainer = createDom('ul', { id: 'todo-list-container' })

    const todoList = this.data.map(({ text, isCompleted }, idx) => {
      const todoContents = isCompleted
        ? `<s><span id=${idx}>${text}</span></s>`
        : `<span id=${idx}>${text}</span>`
      return `<li id=todo-${idx}>${todoContents}<button>삭제</button></li>`
    })

    this.$todoListContainer.innerHTML = todoList.join('')
  }
}

export default TodoList
