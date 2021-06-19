import { $, drag, allowDrop, drop } from './util.js'

const LOADING = 1
const DATARECEIVED = 0

export default class TodoList {
  constructor(params) {
    this.targetDone = params.targetDone
    this.targetNotDone = params.targetNotDone

    this.onClick = params.onClick
    this.onRemove = params.onRemove
    this.data = params.receivedData || []

    // this.target.addEventListener('click', ({ target }) => this.todoClickEventHandler(target))
    // $('#todo-list-notdone').addEventListener('click', ({ target }) => this.todoClickEventHandler(target))

    this.targetDone.addEventListener('dragstart', drag);
    this.targetNotDone.addEventListener('dragstart', drag);
    this.render()
  }

  todoClickEventHandler(target) {
    const todoID = target.closest('li').dataset.id
    if (target.className === 'remove-button') {
      this.onRemove(todoID)
    } else if (target.tagName === 'STRIKE' || target.tagName === 'SPAN') {
      this.onClick(todoID)
    }
  }

  setState(newData) {
    this.data = newData
    if (this.data === null) this.render(LOADING)
    else this.render(DATARECEIVED)
  }

  render(loading) {
    if (loading === DATARECEIVED) {
      if (this.data.length === 0) this.target.innerHTML = '<br/>저장된 Todo 가 없습니다.'
      else {
        let htmlString_done = []
        let htmlString_notdone = []
        this.data.forEach((todo) => {
          const contentHTML = `<li data-id="${todo._id}" draggable='true'>
          <span class="todo-content">${todo.content}</span> <button class="remove-button">Remove</button></li>`
          if (todo.isCompleted === true) htmlString_done.push(contentHTML)
          else htmlString_notdone.push(contentHTML)
        })
        this.targetDone.innerHTML = `<ul>${htmlString_done.join('')}</ul>`
        this.targetNotDone.innerHTML = `<ul>${htmlString_notdone.join('')}</ul>`

        this.targetDone.querySelector("ul").addEventListener('drop', drop);
        this.targetDone.querySelector("ul").addEventListener('dragover', allowDrop);
        this.targetNotDone.querySelector("ul").addEventListener('drop', drop);
        this.targetNotDone.querySelector("ul").addEventListener('dragover', allowDrop);

      }
    } else {
      const htmlString = `<div class="relative spinner-container">
      <span class="material spinner"></span>
    </div>`
      this.targetDone.innerHTML = htmlString
      this.targetNotDone.innerHTML = htmlString
    }
  }
}
