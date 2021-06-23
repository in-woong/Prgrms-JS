import { $, drag, allowDrop, drop } from './util.js'

const LOADING = 1
const DATARECEIVED = 0

export default class TodoList {
  constructor(params) {
    this.targetDone = params.targetDone
    this.targetNotDone = params.targetNotDone

    this.onRemove = params.onRemove
    this.onDrop = params.onDrop
    this.todolistData = params.todolistData || []

    this.targetDone.addEventListener('click', ({ target }) => this.todoClickEventHandler(target))
    this.targetDone.addEventListener('dragstart', drag)
    this.targetNotDone.addEventListener('click', ({ target }) => this.todoClickEventHandler(target))
    this.targetNotDone.addEventListener('dragstart', drag)
    this.render()
  }

  todoClickEventHandler(target) {
    const todoID = target.closest('li').dataset.id
    if (target.className === 'remove-button') {
      this.onRemove(todoID)
    }
  }

  setState(newData) {
    this.todolistData = newData
    if (this.todolistData === null) this.render(LOADING)
    else this.render(DATARECEIVED)
  }

  render(state) {
    if (state === DATARECEIVED) {
      if (this.todolistData.length === 0) this.target.innerHTML = '<br/>저장된 Todo 가 없습니다.'
      else {
        let htmlString_done = []
        let htmlString_notdone = []
        this.todolistData.forEach((todo) => {
          const contentHTML = `<li data-id="${todo._id}" draggable='true'>
          <span class="todo-content">${todo.content}</span> <button class="remove-button">Remove</button></li>`
          if (todo.isCompleted === true) htmlString_done.push(contentHTML)
          else htmlString_notdone.push(contentHTML)
        })
        this.targetDone.innerHTML = `<ul>${htmlString_done.join('')}</ul>`
        this.targetNotDone.innerHTML = `<ul>${htmlString_notdone.join('')}</ul>`

        $('ul', this.targetDone).addEventListener('drop', (event) => drop(event, this.onDrop))
        $('ul', this.targetDone).addEventListener('dragover', allowDrop)
        $('ul', this.targetNotDone).addEventListener('drop', (event) => drop(event, this.onDrop))
        $('ul', this.targetNotDone).addEventListener('dragover', allowDrop)
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
