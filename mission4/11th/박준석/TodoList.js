export default class TodoList {
  constructor(params) {
    this.target = params.target
    this.onClick = params.onClick
    this.onRemove = params.onRemove
    this.data = params.receivedData || []

    this.target.addEventListener('click', ({ target }) => this.todoClickEventHandler(target))
    this.render()
  }

  todoClickEventHandler(target) {
    const todoID = target.closest('li').dataset.id
    if (target.className === 'remove-button') {
      this.onRemove(todoID)
    } else if (target.tagName === 'STRIKE' || target.tagName === 'SPAN'){
      this.onClick(todoID)
    }
  }

  setState(newData) {
    this.data = newData
    if (this.data === null) this.render(1)
    else this.render(0)
  }

  render(loading) {
    let htmlString;
    if (loading === 0) {
      if (this.data.length === 0) this.target.innerHTML = '<br/>저장된 Todo 가 없습니다.'
      else {
        htmlString = this.data.map((todo) => {
          const contentHTML = todo.isCompleted ? `<strike>${todo.content}</strike>` : `<span>${todo.content}<span>`
          return `<li data-id="${todo._id}">${contentHTML} <button class="remove-button">Remove</button></li>`
        })
        this.target.innerHTML = `<ul>${htmlString.join('')}</ul>`
      }
    } else {
      htmlString = `<div class="relative spinner-container">
      <span class="material spinner"></span>
    </div>`
    this.target.innerHTML = htmlString;
    }
  }
}
